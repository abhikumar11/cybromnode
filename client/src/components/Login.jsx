import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [frmInput, setFrmInput] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res=await axios.post(`${import.meta.env.VITE_SERVER}/student/login`, frmInput);
    console.log(res.data);
    localStorage.setItem("token", res.data);
    alert("login success");

  }
  const handleInput = (e) => {
    setFrmInput({ ...frmInput, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h1>Welcome to login page</h1>
      <form style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif"
      }}>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
          Enter Email:
        </label>
        <input
          type="email"
          name="email"
          value={frmInput.email}
          onChange={handleInput}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxSizing: "border-box"
          }}
        />

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
          Enter Password:
        </label>
        <input
          type="password"
          name="password"
          value={frmInput.password}
          onChange={handleInput}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxSizing: "border-box"
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Login
        </button>
      </form>

    </div>
  )
}

export default Login