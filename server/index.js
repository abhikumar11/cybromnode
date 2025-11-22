const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const stuRoute = require("./routes/StudentRoute");
const multer = require("multer");

const session = require("express-session");
const passport = require("passport");

const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const UserModel = require("./models/UserModel");


const clientid = process.env.GOOGLE_CLIENT_ID;
const clientsecret = process.env.GOOGLE_CLIENT_SECRET;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret123",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.DBCONN)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("DB error:", err));

app.use("/student", stuRoute);

passport.use(
  new OAuth2Strategy(
    {
      clientID: clientid,
      clientSecret: clientsecret,
      callbackURL: "http://localhost:3001/auth/google/callback",
      scope: ["profile", "email"],
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await UserModel.findOne({ googleId: profile.id });

        if (!user) {
          user = new UserModel({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });
          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/dashboard",
    failureRedirect: "http://localhost:5173/login",
  })
);

app.get("/login/success", (req, res) => {
  if (req.user) {
    return res.status(200).json({
      message: "User logged in",
      user: req.user,
    });
  }
  return res.status(401).json({ message: "Not authorized" });
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:5173/");
  });
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/imageupload", upload.single("myfile"), (req, res) => {
  res.send("File uploaded");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
