import React from 'react'
import { AppBar, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import axiosInstance from './axiosinterceptors';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const AdminDashboard = () => {
  const navigate=useNavigate();
  const [mentors, setMentors] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    fetchmentor();},[]);
    const fetchmentor=()=>{
   
axiosInstance
.get('http://localhost:4000/admin/mentor/get',mentors)
.then((res)=>{
    // console.log(res.data)
  setMentors(res.data);
    }) .catch((err) => {
      console.error('Error fetching mentors:', err);
    });
};
useEffect(()=>{
fetchproject();},[]);

const fetchproject=()=>{
axiosInstance.get('http://localhost:4000/admin/project/get')
.then((res)=>{
//  console.log(res.data)
setProjects(res.data);
})
.catch((err)=>{
  console.error('Error fetching projects:', err);
});
};
const mentordelete=(id)=>{
    
  axiosInstance.delete(`http://localhost:4000/admin/mentor/del/${id}`)

   .then(()=>{fetchmentor()})
   .catch((error)=>{
     console.log(error)
   })}
   const projectdelete=(id)=>{
    
    axiosInstance.delete(`http://localhost:4000/admin/project/del/${id}`)
  
     .then(()=>{fetchproject()})
     .catch((error)=>{
       console.log(error)
     })}
     function updateMentor(val){
      navigate('/addmentor',{state:{val}})
     }
  
    //  const updateMentor = (mentor) => {
    //   navigate('/addmentor', { state: { mentor } }); // Pass the mentor data for update
    // };
  
    // const updateProject = (project) => {
    //   navigate('/project', { state: { project } }); // Pass the project data for update
    // };
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography variant="h6">Admin Dashboard</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Password</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {mentors.map((mentor) => (
              <TableRow key={mentor._id}>
                <TableCell align="left">{mentor.name}</TableCell>
                <TableCell align="right">{mentor.email}</TableCell>
                <TableCell align="right">{mentor.phone}</TableCell>
                <TableCell align="right">{mentor.password}</TableCell>
                <TableCell align="right">
                  <Button a="true"
                    variant="contained"
                    style={{ marginRight: '10px' }}
                    onClick={() => updateMentor(mentor)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => mentordelete(mentor._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer className="t1" style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} align="center">
                <Typography variant="h6">Project Details</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              {/* <TableCell align="right">Actions</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project._id}>
                <TableCell align="left">{project.title}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    style={{ marginRight: '10px' }}
                    onClick={() => updateProject(project)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => projectdelete(project._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/addmentor" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Create Mentor
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;