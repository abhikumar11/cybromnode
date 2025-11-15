import React, { useState } from 'react'
import axios from 'axios';
const Insert = () => {
  const [frmData,setFrmData]=useState({});

  const handleInput=(e)=>{

      setFrmData((prev)=>({...prev,[e.target.name]:e.target.value}));
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await axios.post(`${import.meta.env.VITE_SERVER}/student/createauthor`,frmData);
    alert(res.data);
  }
  return (
    <div>
      <h1>Insert Student Data</h1>
      <hr />
      <form>
        
        Enter Name:<input type="text" name="name" onChange={handleInput}/>
        <br/>
        Enter Email:<input type="email" name="email" onChange={handleInput}/>
        <br/>
        Enter Book:<input type="text" name="bookname" onChange={handleInput}/>
        <br/>
        Enter Price:<input type="text" name="bookprice" onChange={handleInput}/>
        <br/>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  )
}

export default Insert