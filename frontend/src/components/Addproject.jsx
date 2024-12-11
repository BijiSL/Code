import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import './Project.css';

const Addproject = () => {
  const[users,setUsers]=useState();
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
     <Button variant='contained' color='success' href='/admin'>Back</Button> 
      
  </div>
  </div>

)
}



export default Addproject