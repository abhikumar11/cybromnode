import React, { useState } from 'react'
import axios from "axios";
const Home = () => {
  const[image,setImage]=useState(null);
  const handleInput=(e)=>{
      setImage(e.target.files[0]);
  }
  const handleSubmit=async()=>{
        const frmdata=new FormData();
        frmdata.append("myfile",image);
        const res=axios.post(`${import.meta.env.VITE_SERVER}/imageupload`,frmdata);
  }
  console.log(image);

  return (
    <div>
      <h1>Welcome to home page</h1>
      <h2>Upload File</h2>
      File:<input type="file" onChange={handleInput}/>
      <button onClick={handleSubmit}>Upload</button>
    </div>
  )
}

export default Home