const express=require('express');
const app=express();
const dotenv=require('dotenv');
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');
const mentorRoutes=require('./Routes/mentorRoutes');
const adminRoutes=require('./Routes/adminRoutes');
const cors=require('cors');
app.use(cors());
app.use("/files", express.static("files"));
 app.use('/mentor',mentorRoutes);
app.use('/admin',adminRoutes);
// const multer=require('multer');
// const storage=multer.diskStorage({
//     destination:'./upload',
//     filename:(req,file,cb)=>cb(null,`${Date.now()}-${file.originalname}`)
// })

// const uploader=multer({storage})
// app.post('/upload',uploader.single("file"),(req,res)=>{

// res.send("Done");
// });
 

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})