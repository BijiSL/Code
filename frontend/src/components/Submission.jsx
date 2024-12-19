import { AppBar, Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Submission = () => {
  const [submissions,setSubmissions]=useState([]);
  const [newSubmission,setNewSubmission]=useState({
    student:"",
    status:"None",
    marks:0,
    comments:"",
  });

  // Fetch submissions
  useEffect(()=>{
    axios.get("http://localhost:4000/mentor/submission/get").then((res)=>{
      setSubmissions(res.data);
    });
      },[]);

  // Add new submission
  const handleAdd = () => {
    axios.post("http://localhost:4000/mentor/submission/add", newSubmission)
    .then((res) => {
      setSubmissions([...submissions, res.data]);
      setNewSubmission({ student:"",status: "None", marks: 0, comments: "" });
      console.log(res.data);
    });
  };

  // Update submission
  const handleSave = (id, updatedData) => {
    axios.put(`http://localhost:4000/mentor/submission/update/${id}`,updatedData)
    .then(()=>{
    setSubmissions(submissions.map((item)=>(item._id===id?updatedData:item)))
    })
  }
  
// Delete
const handleDelete=(id)=>{
axios.delete(`http://localhost:4000/mentor/submission/delete/${id}`)
.then(()=>{
  setSubmissions(submissions.filter((item)=>item._id!==id))
})
}
  
  return (
  <div>
      <h1>Submissions</h1>

      {/* Add New Submission */}
      <div>
        <h3>Add Submission</h3>
        <input type="text" placeholder="Student" value={newSubmission.student}
          onChange={(e) => setNewSubmission({ ...newSubmission, student: e.target.value })}
        />
        <select
          value={newSubmission.status}
          onChange={(e) => setNewSubmission({ ...newSubmission, status: e.target.value })}
        >
          <option value="None">None</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
        </select>
        <input
          type="number"
          placeholder="Marks"
          value={newSubmission.marks}
          onChange={(e) => setNewSubmission({ ...newSubmission, marks: e.target.value })}
        />
        <input
          type="text"
          placeholder="Comments"
          value={newSubmission.comments}
          onChange={(e) => setNewSubmission({ ...newSubmission, comments: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Submissions Table */}
      <table border="1">
        <thead>
          <tr>
          <th>Student</th>
            <th>Status</th>
            <th>Marks</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((item) => (
            <tr key={item._id}>
              <td>
            <input type='text' value={item.student} onChange={(e) =>{
                    handleSave(item._id, { ...item, student: e.target.value })
             } }/>
                
                </td>
              <td>
                <select
                  value={item.status}
                  onChange={(e) =>
                    handleSave(item._id, { ...item, status: e.target.value })
                  }
                >
                  <option value="None">None</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                </select>
              </td>
              <td>
                <input
                  type="number"
                  value={item.marks}
                  onChange={(e) =>
                    handleSave(item._id, { ...item, marks: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.comments}
                  onChange={(e) =>
                    handleSave(item._id, { ...item, comments: e.target.value })
                  }
                />
              </td>
              <td>
                <button onClick={() => handleSave(item._id)}>Update</button>
                <button onClick={() => handleDelete(item._id)}>view</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Submission












