
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import axiosInstance from './axiosinterceptors';

const Addmentor= () => {
    const[users,setUsers]=useState();
    const location=useLocation();
    const [form, setForm] = useState({
      name: '',
      email: '',
      phone: '',
      password:''
  });
    useEffect(()=>{
    if(location.state!=null){
      setForm({...form, name:'',
        email:'',
        phone:'',
        password:''
    })
}else{
  setForm({...form, name: location.state.val.name,
    email: location.state.val.email,
    phone: location.state.val.phone,
    password:location.state.val.password
  }
    )}},[])
    const inputhandler=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value})
    }
    const submit=()=>{
      if(location.state!=null) {
        axiosInstance.put(`http://localhost:4000/admin/mentor/edit/${location.state.val._id}`, form)
        .then(() => {
            alert('Updated successfully');
            navigate('/addmentor');
        })
        .catch((error) => console.log(error));
    }
    else {
        axiosInstance.post(`http://localhost:4000/admin/mentor/add`, form)
        .then((res) => {
            alert(res.data.message);
            navigate('/addmentor');
        })
        .catch((error) => console.log(error));
    }}

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
    <div>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add Mentor
          </Typography>
<TextField variant='outlined' type='name' label="Name" name='name' value={form.name} onChange={inputhandler}/>
       <br/><br/>
       <TextField variant='outlined' type='email' label="Email" name='email' value={form.email} onChange={inputhandler}/>
       <br/><br/>
       <TextField variant='outlined' type='phonenumber' label="Phonenumber"name='phone' value={form.phone} onChange={inputhandler}/>
       <br/><br/>
       <TextField variant='outlined' type='password' label="Password" name='password' value={form.password} onChange={inputhandler}/>
       <br/><br/>
       {/* <TextField variant='outlined' type='Projects' label="projects"/> */}
       {/* <br/><br/> */}
       <Button variant='contained' color='success' onClick={submit}>Add</Button> 
       <Button variant='contained' color='success' href='/admin'>Back</Button> 
        
    </div>
    </Box>
 
  )
}

export default Addmentor