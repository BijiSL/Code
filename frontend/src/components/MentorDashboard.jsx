import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MentorDashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get('http://localhost:5000/mentor/dashboard', {
        params: { mentorId: 'MENTOR_ID_HERE' },
      });
      setProjects(res.data);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Mentor Dashboard</h1>
      {projects.map((project) => (
        <div key={project._id}>
          <h2>{project.title}</h2>
          <ul>
            {project.submissions.map((submission) => (
              <li key={submission._id}>
                {submission.student} - {submission.status}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MentorDashboard;
// import React from 'react'
// import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

// const MentorDashboard = () => {
//   return (
//     <div>
// <Box sx={{ flexGrow: 1 }} >
//       <AppBar position="fixed" >
//         <Toolbar >
//         <img src="images/logo.png"
//         alt="Logo"
//         style={{ height: '100px', marginRight: '90px' }} 
//       />
//        <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign:'left'}}>
//             Admin Dashboard
//           </Typography>
//           <Button color="inherit"sx={{fontSize:'15px'}}><h3>Projects</h3></Button>
//           <Button color="inherit" sx={{fontSize:'15px'}}><h3>Evaluation </h3> </Button>
//                    <Button color="inherit" sx={{fontSize:'15px'}} a href='/home'><h3>Logout</h3></Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//     </div>
//   )
// }

// export default MentorDashboard