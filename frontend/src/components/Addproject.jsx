import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Project.css';

const Addproject = () => {
  const[users,setUsers]=useState();
  const [projects, setProjects] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedMentor, setSelectedMentor] = useState('');
  useEffect(() => {
    // Fetching projects and mentors
    axios.get('http://localhost:4000/admin/project/get').then((res) => {
      console.log('Projects fetched:', res.data);
      setProjects(res.data);
    });
    axios.get('http://localhost:4000/admin/mentor/get').then((res) => {
      console.log('Mentors fetched:', res.data);
      setMentors(res.data);
    });
  }, []);
  const inputhandler=(e)=>{
      setUsers({...users,[e.target.name]:e.target.value})
  }
  const submit=()=>{
    console.log(users);
      axios.post('http://localhost:4000/admin/project/add',users)
      .then((res)=>{
console.log(res)
      })
      .catch((error)=>{
console.log(error);
      })
    }
  const assign=() => {
    const assignment = { projectId: selectedProject, mentorId: selectedMentor };
    console.log('Assigning:', assignment);
    axios.post('http://localhost:4000/admin/project/assign', assignment)
      .then((res) => {
        console.log('Project assigned:', res.data);
      })
      .catch((error) => {
        console.error('Error assigning project:', error);
      });
  };

    
  
return (
 
  <div className="container">
     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <b> ADD PROJECT</b>
        </Typography>
<TextField className="input-field" variant='outlined' type='name' label="Name" name='title' onChange={inputhandler}/>
     <br/><br/>
     <div className="button-group">
     <br/><br/>
     <Button variant='contained' color='success' onClick={submit}>Add</Button> &nbsp;&nbsp;&nbsp;
     <Button variant='contained' color='success' href='/admin'>Back</Button> <br/><br/><br/><br/>
      
  </div>
<div>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <b> ASSIGN PROJECT</b>
        </Typography>
  <FormControl fullWidth>
    
  <InputLabel id="demo-simple-select-label">Project</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name='title'
    onChange={inputhandler}
  >
    {projects.map((project) => (
              <MenuItem key={project.id} value={project.id}>
                {project.title}
              </MenuItem>))}
  </Select>
  
</FormControl><br/><br/>

<FormControl fullWidth>
    
    <InputLabel id="demo-simple-select-label">Mentor</InputLabel>
  
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select" name='name'
      onChange={inputhandler}
    >
      {mentors.map((mentor) => (
        <MenuItem key={mentor.id} value={mentor.id}>
          {mentor.name}
        </MenuItem>
      ))}
    </Select>
    
  </FormControl>
  <br/><br/>
     <Button variant='contained' color='success' onClick={assign}>Assign</Button> &nbsp;&nbsp;&nbsp;
     <Button variant='contained' color='success' href='/admin'>Back</Button> <br/><br/><br/><br/>
  </div>
  </div>
)
}



export default Addproject