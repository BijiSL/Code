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
    axios.post("http://localhost:4000/mentor/submissions", newSubmission)
    .then((res) => {
      setSubmissions([...submissions, res.data]);
      setNewSubmission({ status: "None", marks: 0, comments: "" });
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
                <select
                  value={item.student}
                  onChange={(e) =>
                    handleSave(item._id, { ...item, student: e.target.value })
                  }
                ></select></td>
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















// <div>
//     //      <Box sx={{ flexGrow: 1 }} >
//     //   <AppBar position="fixed" >
//     //     <Toolbar >
//     //     <img src="images/logo.png"
    //     alt="Logo"
    //     style={{ height: '100px', marginRight: '90px' }} 
    //   />
    //    <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign:'left'}}>
    //         Mentor Dashboard
    //       </Typography>
    //       <Button color="inherit" sx={{fontSize:'15px'}}  href='/mentor'><h3>Back</h3></Button>
    //       <Button color="inherit" sx={{fontSize:'15px'}}  href='/'><h3>Logout</h3></Button>
    //         </Toolbar>
    //   </AppBar>
    // </Box>
    // <Typography gutterBottom sx={{ color: 'black', fontSize: 25, marginTop: 20, textAlign:'center'}}>
    //   Submissions
    //   </Typography>
    //   <FormControl sx={{ minWidth: 120 }}>
    //         <InputLabel>Filter</InputLabel>
    //         <Select>
    //           <MenuItem value="">None</MenuItem>
    //           <MenuItem value="Approved">Approved</MenuItem>
    //           <MenuItem value="Pending">Pending</MenuItem>
    //         </Select>
    //       </FormControl>
    //       <br/><br/>
    //   <TableContainer component={Paper}>
    //       <Table>
    //         <TableHead>
    //           <TableRow>
    //             <TableCell>Student</TableCell>
    //             <TableCell>Status</TableCell>
    //             <TableCell>Marks</TableCell>
    //             <TableCell>Comments</TableCell>
    //             <TableCell>Actions</TableCell>
    //           </TableRow>
    //         </TableHead>
          
    //         </Table>
    //         </TableContainer>
    //         <br/>
    //   <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          
    //       <TextField label="Student Name" variant="outlined" />
    //       <TextField label="Status" variant="outlined" />
    //       <TextField label="Marks" variant="outlined" />
    //       <TextField label="Comments" variant="outlined" />
    //       <TableCell>
    //               <Button variant="outlined" color="primary" size="small">
    //                 View Project
    //               </Button>
    //               <Button
    //                 variant="contained"
    //                 color="success"
    //                 size="small"
    //                 sx={{ mx: 1 }}
    //               >
    //                 Save
    //               </Button>
    //               <Button variant="contained" color="error" size="small">
    //                 Delete
    //               </Button>
    //               </TableCell>
    //     </Box>
        
            

    //     </div>
        
//   )
// }