const express=require('express');
const app=express();
const dotenv=require('dotenv');
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');
// const mentorRoutes=require('./Routes/mentorRoutes');
const adminRoutes=require('./Routes/adminRoutes');
const cors=require('cors');
app.use(cors());
// app.use('/mentors',mentorRoutes);
app.use('/admin',adminRoutes);

// display project
app.get('/admin/project/get', (req, res) => {
       res.json(projects); 
  });
app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})