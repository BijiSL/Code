import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from './axiosinterceptors'
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import shadows from '@mui/material/styles/shadows';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginForm,setLoginForm]=useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    //     axiosInstance.post("http://localhost:4000/admin/login",loginForm)
    //     .then((res)=>{
    //         toast.success(res.data.message);
    //         if(res.data.token){
    //             sessionStorage.setItem("token",res.data.token);
    //             if(res.data.role==="admin"){
    //                 console.log("Role:", res.data.role);
    //                 navigate('/admin');
    //             }else if(res.data.role==="mentor" && res.data.mentorId){
    //                 sessionStorage.setItem("mentorId",res.data.mentorId);
    //                 console.log("MentorId:", res.data.mentorId);
    //                 navigate('/mentor');
    //             }else{
    //                 navigate('/login');
    //             }
    //         }
    //     })
    // .catch((error)=>{
    //     console.log(error);
    //     toast.error("inavalid")
    // })}
        e.preventDefault();
        try{
            const { data } = await axiosInstance.post('http://localhost:4000/admin/login', { email, password });
            localStorage.setItem('role', data.role);
            localStorage.setItem('token', data.token);
           const mentorId = localStorage.setItem('mentorId',data.mentorId);
            navigate(data.role === 'admin' ? '/admin' : '/mentor');
        } catch (error) {
            alert('Invalid Credentials');
        } };

    return (
        
        <div className="login" style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
            backgroundImage: "url('public/images/Login.avif')",
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
            height: '100vh',
      width: '100vw', 
    
        }}>
            <Box sx={{ flexGrow: 1 ,marginBottom:'40%'}}>
      <AppBar position="static" sx={{backgroundColor: 'transparent',
            boxShadow: 'none' }}>
      <Toolbar >
        <img src="images/logo.png"
        alt="Logo"
        style={{ height: '100px', marginRight: '90px' }} 
      />
       <Typography variant="h6" component="div" sx={{ flexGrow: 1,}}>
            <h2>ICTK Internship Portal</h2>
          </Typography>
           <Button position='marginRight' color="inherit" a href='/'><h2>Home</h2></Button>

          </Toolbar></AppBar></Box>
            <form onSubmit={handleLogin}
             style={{
                display: 'flex',
                marginRight:'10%',
                flexDirection: 'column',
                formshadows:'none',
                gap: '15px',
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
        >
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required
                 style={{
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                }} /><br/><br/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required 
                 style={{
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                }}/><br/><br/>
                <button  type="submit" style={{
                        padding: '10px',
                        fontSize: '16px',
                        color: '#fff',
                        backgroundColor: '#007BFF',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}>Login</button>
            </form>
        </div>
    );
};

export default Login;