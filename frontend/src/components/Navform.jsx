import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const MentorDashboard = () => {
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
          <Button color="inherit"sx={{fontSize:'15px'}}><h3>Projects</h3></Button>
          <Button color="inherit" sx={{fontSize:'15px'}}><h3>Evaluation </h3> </Button>
                   <Button color="inherit" sx={{fontSize:'15px'}} a href='/'><h3>Logout</h3></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default MentorDashboard