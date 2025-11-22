const Login = () => {

  const loginwithGoogle = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  return (
    <>
      <div
        className="container"
        style={{
          width: "350px",
          margin: "50px auto",
          padding: "25px",
          border: "1px solid #ccc",
          borderRadius: "12px",
          textAlign: "center",
          fontFamily: "Arial",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <h1 style={{ marginBottom: "20px", fontSize: "24px" }}>User Login</h1>
        <label style={{ float: "left" }}><b>Username</b></label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px 0",
            borderRadius: "6px",
            border: "1px solid #aaa"
          }}
        />

        <label style={{ float: "left" }}><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px 0",
            borderRadius: "6px",
            border: "1px solid #aaa"
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>

        <div style={{ margin: "15px 0", fontWeight: "bold" }}>OR</div>

        <button
          type="button"
          onClick={loginwithGoogle}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Icono_google.png"
            width="22"
            alt="google"
          />
          Login With Google
        </button>
      </div>
    </>
  );
};

export default Login;
