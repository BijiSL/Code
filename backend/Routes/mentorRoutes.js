// const express=require('express');
// const router=express.Router();
// const project=require('../models/project');

const mongoose=require('mongoose')
const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Submission = require('../models/submission');
const ReferenceMaterial = require('../models/reference');
const multer = require("multer");
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
// router.get('/projects', async (req, res) => {
//   try {
//     const mentor_id = req.mentor_id; // Assuming `req.user` contains authenticated mentor details
//     const projects = await Project.find({ mentor: mentor_id }).populate('submissions');
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch projects' });
//   }
// });


// // Evaluate submission
// router.put('/submissions/:id', async (req, res) => {
//   try {
//     const { marks, comments, status } = req.body;
//     const submission = await Submission.findByIdAndUpdate(
//       req.params.id,
//       { marks, comments, status },
//       { new: true }
//     );
//     res.json(submission);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to evaluate submission' });
//   }
// });

// // Delete submission
// router.delete('/submissions/:id', async (req, res) => {
//   try {
//     await Submission.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Submission deleted' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete submission' });
//   }
// });

// // Add reference material
// router.post('/materials', async (req, res) => {
//   try {
//     const { title, link, project } = req.body;
//     const material = new ReferenceMaterial({ title, link, project, mentor: req.user.id });
//     await material.save();
//     res.json(material);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to add reference material' });
//   }
// });

// // Delete reference material
// router.delete('/materials/:id', async (req, res) => {
//   try {
//     await ReferenceMaterial.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Reference material deleted' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete reference material' });
//   }
// });

module.exports = router;
