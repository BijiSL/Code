
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosinterceptors';

const Addmentor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  
  useEffect(() => {
    if (location.state !=null) {
      setForm({...form,
        name: location.state.val.name,
        email: location.state.val.email,
        phone: location.state.val.phone,
        password: location.state.val.password
      });
    }else{
      setForm({...form,name:'',
        email:'',
        phone:'',
        password:''
      })
    }}, []);

 
  const submit = () => {
    if (location.state!=null) {
      axiosInstance
        .put(`http://localhost:4000/admin/mentor/edit/${location.state.val._id}`, form)
        .then(() => {
          alert('Updated successfully');
          navigate('/addmentor');
        })
        .catch((error) => console.error(error));
    } else {
      axiosInstance
        .post('http://localhost:4000/admin/mentor/add', form)
        .then((res) => {
          alert(res.data.message);
          navigate('/addmentor');
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <Box 
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },marginTop:20, paddingLeft: '40%'}}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          <b>Add Mentor</b>
        </Typography>
        <TextField
          variant="outlined"
          type="text"
          label="Name"
          name="name"
          value={form.name}
         onChange={(e)=>{
          setForm({...form,name:e.target.value})
         }}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          type="email"
          label="Email"
          name="email"
          value={form.email}
          onChange={(e)=>{
            setForm({...form,email:e.target.value})}}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          type="text"
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={(e)=>{
            setForm({...form,phone:e.target.value})}}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          type="password"
          label="Password"
          name="password"
          value={form.password}
          onChange={(e)=>{
            setForm({...form,password:e.target.value})}}
        />
        <br />
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="success" onClick={()=>submit()}>
          Add
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="success" href="/admin">
          Back
        </Button>
      </div>
    </Box>
  );
};

export default Addmentor;
