import { AppBar, Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Submission = () => {
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
          <Button color="inherit" sx={{fontSize:'15px'}}  href='/mentor'><h3>Back</h3></Button>
          <Button color="inherit" sx={{fontSize:'15px'}}  href='/'><h3>Logout</h3></Button>
            </Toolbar>
      </AppBar>
    </Box>
    <Typography gutterBottom sx={{ color: 'black', fontSize: 25, marginTop: 20, textAlign:'center'}}>
      Submissions
      </Typography>
      <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Filter</InputLabel>
            <Select>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Approved">Approved</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </FormControl>
          <br/><br/>
      <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Marks</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
          
            </Table>
            </TableContainer>
            <br/>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          
          <TextField label="Student Name" variant="outlined" />
          <TextField label="Status" variant="outlined" />
          <TextField label="Marks" variant="outlined" />
          <TextField label="Comments" variant="outlined" />
          <TableCell>
                  <Button variant="outlined" color="primary" size="small">
                    View Project
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{ mx: 1 }}
                  >
                    Save
                  </Button>
                  <Button variant="contained" color="error" size="small">
                    Delete
                  </Button>
                  </TableCell>
        </Box>
        
            

        </div>
        
  )
}

export default Submission