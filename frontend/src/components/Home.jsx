import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div 
    style={{
      backgroundImage: "url('public/images/home.jpg')",
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
            height: '100vh',
      width: '100vw', 
    }}>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'transparent',
            boxShadow: 'none', }}>
      <Toolbar >
        <img src="images/logo.png"
        alt="Logo"
        style={{ height: '100px', marginRight: '90px' }} 
      />
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h2>ICTK Internship Portal</h2>
          </Typography>
          
          <Button color="inherit" a href='/login' ><h2>LOGIN</h2></Button>
        </Toolbar>
      </AppBar>
    </Box>
    <br/><br/><br/><br/>
    <div 
        style={{
          textAlign: 'center', 
          marginTop: '50px', 
          color: 'bisque', // Text color
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to the ICTK Internship Portal
        </Typography><br/><br/>
        <Typography variant="h5" fontStyle={'oblique'} gutterBottom>
          <h6>The ICT Academy of Kerala (ICTAK) is a social enterprise established through a Public-Private Partnership (PPP) model. Its mission is to impart ICT skills to the youth of Kerala, enhancing their employability in the industry. Supported by the Government of India, and partnered with the Government of Kerala and the IT industry, ICTAK is dedicated to transforming the workforce through innovative training and development programs.This is a platform designed to help students and mentors collaborate effectively during internships.</h6> 
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href="/login" 
          style={{ marginTop: '20px' }}
       >
          Get Started
        </Button>
      </div>
    </div>
  );
}

  export default Home