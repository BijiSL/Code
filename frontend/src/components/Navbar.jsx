import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    
         <div>
<Box sx={{ flexGrow: 1}} >
      <AppBar position="fixed"  sx={{backgroundColor: 'transparent',
            boxShadow: 'none', }}>
        <Toolbar >
        <img src="images/logo.png"
        alt="Logo"
        style={{ height: '100px', marginRight: '90px' }} 
      />
       <Typography variant="h4" component="div" sx={{ flexGrow: 1,color:'brown' ,textAlign:'left'}}>
           <b> Admin Dashboard</b>
          </Typography>
          <Button color="inherit"sx={{fontSize:'15px',color:'brown'}} href='/addmentor'><h3>Add Mentor</h3></Button>
          <Button color="inherit" sx={{fontSize:'15px',color:'brown'}}href='/project'><h3>Add Projects </h3> </Button>
          {/* <Button color="inherit" sx={{fontSize:'15px'}}><h3>Marks </h3> </Button> */}
          <Button color="inherit" sx={{fontSize:'15px',color:'brown'}}  href='/'><h3>Logout</h3></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>


  )
}

export default Navbar