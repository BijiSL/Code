import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from './axiosinterceptors';

const Login = () => {
  const navigate=useNavigate();
  const [loginForm,setLoginForm]=useState({email:'',password:''});
//   const inputhandler=(e)=>{
//     setLoginForm({...loginForm,[e.target.name]:e.target.value})
// }
const capValue=()=>{
  // console.log(loginForm);
    axiosInstance.post('http://localhost:4000/admin/login',loginForm)
    .then((res)=>{
alert(res.data.message);
if(res.data.token){
  sessionStorage.setItem('token',res.data.token);
  if(res.data.role==="admin"){
    navigate("/admin");
  }else if(res.data.role==="mentor"){
    navigate("/mentor");
  }else{
    navigate("/login")
  }
}else{ 
navigate('/');
}
}).catch((error)=>{
console.log(error);
alert("Invalid Credentials");
})
  
}
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
    <div>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGIN
          </Typography>
<TextField variant='outlined' type='email' label="Email" name='email' onChange={(e)=>{
          setLoginForm({...loginForm,email:e.target.value})
        }} />
       <br/><br/>
       <TextField variant='outlined' type='password' label="Password" name='password' onChange={(e)=>{
          setLoginForm({...loginForm,password:e.target.value})
        }} />
       <br/><br/>
       <Button variant='contained' type='submit' color='success' onClick={capValue}>Login</Button> 
        
    </div>
    </Box>
  )
}

export default Login

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.post('http://localhost:5000/api/login', { email, password });
//             localStorage.setItem('role', data.role);
//             localStorage.setItem('token', data.token);
//             navigate(data.role === 'admin' ? '/admin-dashboard' : '/mentor-dashboard');
//         } catch (error) {
//             alert('Invalid Credentials');
//         }
//     };

//     return (
//         <div className="login">
//             <form onSubmit={handleLogin}>
//                 <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;