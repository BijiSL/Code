const mongoose=require('mongoose')
const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const ReferenceMaterial = require('../models/reference');
const multer = require("multer");
// const submission = require('../models/submission');
router.use(express.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

require('../models/reference');
const PdfSchema=mongoose.model("references")
const upload = multer({ storage: storage });

router.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await PdfSchema.create({ title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});
router.get("/get-files", async (req, res) => {
  try {
    PdfSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});

//apis---------------------
router.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});





// Get all projects assigned to the mentor
router.get('/projects', async (req, res) => {
  try {
    const mentorId = req.mentor._id; // Assuming `req.user` contains authenticated mentor details
    const projects = await Project.find({ mentor: mentorId });
   
    if (!projects.length) {
      return res.status(404).json({ message: "No projects found for this mentor" });
    }

    res.json({ status: "success", data: projects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

router.get('/submission/get',async(req,res)=>{
  const projects=await Project.find();
  res.json(projects);
});

router.post('/submissions',async(req,res)=>{
  const {student,status,marks,comments}=req.body;
  const newSubmission=new Project({student,status,marks,comments});
  await newSubmission.save();
  res.json(newSubmission);
});

router.put('/submission/update/:id',async(req,res)=>{
  const updateSubmission=await Project.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.json(updateSubmission);
});


// // Delete submission
router.delete('/submission/delete/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Submission deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete submission' });
  }
});




module.exports = router;
