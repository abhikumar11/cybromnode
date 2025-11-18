import React from 'react'
import { useState } from 'react'
import axios from "axios";
const Register = () => {
  const [frmInput, setFrmInput] = useState({ name: "", email: "", password: "" });

  const handleInput = (e) => {
    setFrmInput({ ...frmInput, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${import.meta.env.VITE_SERVER}/student/registration`, frmInput);
    console.log(res.data);
    setFrmInput({ name: "", email: "", password: "" })
  }
  return (
    <div>
      <h1>Welcome to register page</h1>
      <form
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9"
        }}
      >
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Enter Name:
        </label>
        <input
          type="text"
          name="name"
          value={frmInput.name}
          onChange={handleInput}
          style={{
            width: "100%",
            padding: "8px 12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        />

        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Enter Email:
        </label>
        <input
          type="email"
          name="email"
          value={frmInput.email}
          onChange={handleInput}
          style={{
            width: "100%",
            padding: "8px 12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        />

        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Enter Password:
        </label>
        <input
          type="password"
          name="password"
          value={frmInput.password}
          onChange={handleInput}
          style={{
            width: "100%",
            padding: "8px 12px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Register
        </button>
      </form>


    </div>
  )
}

export default Register