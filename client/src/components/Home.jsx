import React from "react";
import axios from "axios";
const Home = () => {
  const handleSubmit=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_SERVER}/home`);
    console.log(res.data);
  }
    const handleAbout=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_SERVER}/about`);
    console.log(res.data);
  }
    const handleService=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_SERVER}/service`);
    console.log(res.data);
  }
   const btn1=async()=>{
     const res=await axios.get(`${import.meta.env.VITE_SERVER}/home`);
    console.log(res.data);
   }
    const btn2=async()=>{
     const res=await axios.get(`${import.meta.env.VITE_SERVER}/about`);
    console.log(res.data);
   }
    const btn3=async()=>{
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

         <button onClick={btn1}>Btn1</button>
      <button onClick={btn2}>Btn2</button>
      <button onClick={btn3}>Btn3</button>
      <hr />
    </div>
  );
};

export default Home;
