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
    // console.log('here')
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

  const handleSelectChange = (e) => {
    setSelectedProject(e.target.value)
  }
    
  
  const handleMentorSelectChange = (e) => {
    setSelectedMentor(e.target.value)
  }
    
  console.log('test projects', mentors);
  // Assign
  const assign = async () => {
    try {
      await axios.post('http://localhost:4000/admin/assignProject', {
        project_id: selectedProject,
        mentor_id: selectedMentor,
      });
      alert('Project assigned successfully');
    } catch (error) {
      console.error(error);
      alert('Error assigning project');
    }
  };
  
return (
 
  <div className="container">
     <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
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
<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
         <b> ASSIGN PROJECT</b>
        </Typography>
  <FormControl fullWidth>
    
  <InputLabel id="project-select-label">Project</InputLabel>
  <Select
    labelId="project-select-label"
    id="project-select"
    value={selectedProject || ''}
    name='title'
    onChange={handleSelectChange}
  >
    {projects.map((project) => (
              <MenuItem key={project._id} value={project._id}>
                {project.title}
              </MenuItem>))}
  </Select>
  
</FormControl><br/><br/>

<FormControl fullWidth>
    
    <InputLabel id="demo-simple-select-label">Mentor</InputLabel>
  
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select" name='name'
      value={selectedMentor}
      onChange={handleMentorSelectChange}
    >
      {mentors.map((mentor) => (
        <MenuItem key={mentor._id} value={mentor._id}>
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