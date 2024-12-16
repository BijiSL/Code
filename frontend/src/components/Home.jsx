import React from 'react'
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';<ArrowDropDownIcon /> 
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar >
        <img src="images/logo.png"
        alt="Logo"
        style={{ height: '100px', marginRight: '90px' }} 
      />
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ICTK Internship Portal
          </Typography>
          {/* <Button color="inherit">HOME</Button>
          <Button color="inherit">CONTACTS  </Button> */}
          <Button color="inherit" a href='/login'>LOGIN</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Home