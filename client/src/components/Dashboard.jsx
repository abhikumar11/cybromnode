import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/login/success", {
        withCredentials: true,
      })
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  if (!user) return <p style={{ fontSize: "20px", marginTop: "40px" }}>Loading...</p>;

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0px 4px 18px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        {/* Profile Image */}
        <img
          src={user.image}
          alt="Profile"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            marginBottom: "20px",
          }}
        />

        {/* Welcome Text */}
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
          Welcome, <span style={{ color: "#007bff" }}>{user.displayName}</span>
        </h1>

        <p style={{ fontSize: "16px", color: "#555", marginBottom: "25px" }}>
          {user.email}
        </p>

        {/* Divider */}
        <hr style={{ margin: "20px 0", opacity: 0.2 }} />

        {/* Logout Button */}
        <a href="http://localhost:3001/logout">
          <button
            style={{
              padding: "10px 25px",
              backgroundColor: "#007bff",
              border: "none",
              outline: "none",
              borderRadius: "8px",
              fontSize: "16px",
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Logout
          </button>
        </a>
      </div>
    </div>
  );
}
