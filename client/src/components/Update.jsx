import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Update = () => {
  const [student,setStudent]=useState([]);

  const loadData=async()=>{
    const res=await axios.get("http://localhost:3001/student/display");
    setStudent(res.data);
  }

  useEffect(()=>{
    loadData();
  })
  const handleDelete=async(id)=>{
      const stu=await axios.get(`http://localhost:3001/student/delete/${id}`);
       alert(stu.data.msg);
       loadData();
  }

  return (
    <div>
      <h1>Student Data</h1>
      <hr />
      <table border="2px" width="600" align="center">
        <tr style={{backgroundColor:"grey"}}>
          <th>Roll No</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
          <th>Action</th>
        </tr>
        {
          student.map((item)=>(
            <tr>
              <td>{item.rollno}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.fees}</td>
              <td>
                <button>Edit</button>
               <button onClick={()=>handleDelete(item._id)}>Delete</button>
               </td>
            </tr>
          ))
        }
      </table>
      <hr />
    </div>
  )
}

export default Update