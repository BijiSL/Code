import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    
         <div>
<Box sx={{ flexGrow: 1}} >
      <AppBar position="fixed" >
        <Toolbar >
        <img src="images/logo.png"
        alt="Logo"
        style={{ height: '100px', marginRight: '90px' }} 
      />
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign:'left'}}>
            Admin Dashboard
          </Typography>
          <Button color="inherit"sx={{fontSize:'15px'}} href='/addmentor'><h3>Add Mentor</h3></Button>
          <Button color="inherit" sx={{fontSize:'15px'}}href='/project'><h3>Add Projects </h3> </Button>
          {/* <Button color="inherit" sx={{fontSize:'15px'}}><h3>Marks </h3> </Button> */}
          <Button color="inherit" sx={{fontSize:'15px'}} a href='/'><h3>Logout</h3></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>


  )
}

export default Navbar