import { AppBar, Box, Button, Card, CardActions, CardContent, TextField, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios"


const MentorDashboard = () => {
  const [title,setTitle]=useState("");
  const[file,setFile]=useState("");

  const[projects,setProjects]=useState([]);
  useEffect(()=>{
    const fetchProjects=async()=>{
      const mentorId=sessionStorage.getItem("mentorId");
      console.log("mentorId",mentorId);
      if(!mentorId){
        console.log("Mentor Id not found");
      
      return;
    }
    try {
      const res=await axios.get(`http://localhost:4000/mentor/projects/${mentorId}`);
      console.log("projects response:",res.data);
      setProjects(res.data.projects);
    } catch (error) {
      console.log("Error Fetching",error);
    }
  
  }
  fetchProjects()},[]);

  const submitImage = async(e) => {
    e.preventDefault();
const formData=new FormData();
formData.append("title",title);
formData.append("file",file);
console.log(title,file);
const result =await axios.post("http://localhost:4000/mentor/upload-files",formData,{
headers:{"content-type":"multipart/form-data"},

  });
  console.log(result);
}
  return (
   
    <div>
      <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" >
        <Toolbar >
        <img src="images/logo.png"
        alt="Logo"
        style={{ height: '100px', marginRight: '90px' }} 
      />
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign:'left'}}>
            Mentor Dashboard
          </Typography>
          <Button color="inherit" sx={{fontSize:'15px'}}  href='/'><h3>Logout</h3></Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    <Card sx={{ width: 300, marginTop: '10%', padding: 2  }}>
          <CardContent>
      <Typography gutterBottom sx={{ color: 'black', fontSize: 25}}>
        Projects
      </Typography>
      
    </CardContent>
    <CardActions>
      <Button size="small" href='/sub'>View Submissions</Button>
    </CardActions>
  </Card><br/><br/>
   <Typography gutterBottom sx={{ color: 'black', fontSize: 25}}>
      Reference Material
      </Typography>
      <form onSubmit={submitImage}>
        <input type='text' placeholder='Title' required 
        onChange={(e)=>setTitle(e.target.value)}/>
        <input variant='outlined' type='file' accept='application/pdf' required 
        onChange={(e)=>setFile(e.target.files[0])}/>
<br/><br/>
   
        {/* <TextField type='text' label='Reference Material' sx={{width:500}} /><br/><br/> */}
  <Button variant='outlined' type='submit'>Submit</Button>
  <Button variant='outlined'>Delete</Button>
  </form>
  </div>
  
  )
}

export default MentorDashboard