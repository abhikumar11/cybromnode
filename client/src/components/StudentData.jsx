import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const StudentData = () => {
    const [frmInput,setFrmInput]=useState({});
    const [stuImage,setStuImage]=useState("");
    
    const handleInput=(e)=>{
        setFrmInput({...frmInput,[e.target.name]:e.target.value});
    }

     const handleImage=(e)=>{
        setStuImage(e.target.files);
    }
      
    const handleSubmit=async(e)=>{
       
                e.preventDefault();
              const frmdata=new FormData();

              for(let i in frmInput){
                frmdata.append(i,frmInput[i]);
              }

              for(let i=0;i<stuImage.length;i++){
                frmdata.append("images",stuImage[i]);
              }

           
              const res=await axios.post(`${import.meta.env.VITE_SERVER}/student/create`,frmdata);
    }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Student Information Form</h2>
      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input style={styles.input} type="text" id="name" name="name" onChange={handleInput} />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input style={styles.input} type="email" id="email" name="email" onChange={handleInput}/>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="subject">Subject:</label>
          <input style={styles.input} type="text" id="subject" name="subject" onChange={handleInput} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="image">Student Image:</label>
          <input style={styles.input} type="file" id="image" name="images" accept="image/*" multiple onChange={handleImage} />
        </div>

        <button onClick={handleSubmit} style={styles.button}>Submit</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '8px 10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default StudentData;
