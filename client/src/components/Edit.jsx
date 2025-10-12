import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Edit = () => {
    const [student,setStudent]=useState({});
    const {id}=useParams();

    const loadData=async()=>{
         const stu=await axios.get(`http://localhost:3001/student/show/${id}`);
        setStudent(stu.data);
    }

    useEffect(()=>{
        loadData();
    },[])

    const handleInput=(e)=>{
        setStudent((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleUpdate=async()=>{
      const stu=await axios.post("http://localhost:3001/student/updatestu",student);
      alert(stu.data.msg);
           
    }
  return (
    <div>
        <h1>Edit Student Data</h1>
        <hr />
         Enter Roll No:<input type="text" name="rollno" onChange={handleInput}/>
        <br/>
        Enter Name:<input type="text" name="name" onChange={handleInput}/>
        <br/>
        Enter City:<input type="text" name="city" onChange={handleInput}/>
        <br/>
        Enter Fees:<input type="text" name="fees" onChange={handleInput}/>
        <br/>
        <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default Edit