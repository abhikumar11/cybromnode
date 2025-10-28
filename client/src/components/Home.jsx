import React from "react";
import axios from "axios";
const Home = () => {
  const handleSubmit=async()=>{
    try {
      const res=await axios.get(`${import.meta.env.VITE_SERVER}/home`);
      console.log(res.data);
    } catch (error) {
      alert(error.response.data)
    }
    
  }
    const handleAbout=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_SERVER}/about`);
    console.log(res.data);
  }
    const handleService=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_SERVER}/service`);
    console.log(res.data);
  }

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={handleSubmit}>Home page</button>
      <button onClick={handleAbout}>About page</button>
      <button onClick={handleService}>Service page</button>
          <br /><br />
      <hr />
    </div>
  );
};

export default Home;
