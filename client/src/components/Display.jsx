import React, { useEffect, useState } from 'react'
import axios from "axios";
import{useNavigate}from "react-router-dom";

const Display = () => {

  const [message,setMessage]=useState("");
  const navigate=useNavigate();

  const loadData=async()=>{
        try{
        const token=localStorage.getItem("token");
        const res=await axios.get(`${import.meta.env.VITE_SERVER}/student/display`,{headers:{Authorization:token},});
        setMessage(res.data);
        }catch(err){
        console.log(err);
        alert("Session expired or unauthorized!");
        localStorage.removeItem("token");
        navigate("/login");
        }
  }
  useEffect(()=>{
    loadData();
  },[])

  const handleLogout =()=> {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleLogout}
       style={{
            width: "100px",
            padding: "12px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
      >Logout</button>
    </div>
  )
}

export default Display