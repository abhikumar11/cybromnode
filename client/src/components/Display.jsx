import React, { useEffect, useState } from 'react'
import axios from "axios";
const Display = () => {
  const [student,setStudent]=useState([]);

  const loadData=async()=>{
    const res=await axios.get("http://localhost:3001/student/display");
    setStudent(res.data);
  }

  useEffect(()=>{
    loadData();
  })

  return (
    <div>
      <h1>Student Data</h1>
      <hr />
      <table border={"2px"}>
        <tr>
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
                <button>Delete</button>
              </td>
            </tr>
          ))
        }
      </table>
      <hr />
    </div>
  )
}

export default Display