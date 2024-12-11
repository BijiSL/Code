const express=require('express');
const project=require('../models/project');
const router=express.Router();
router.get('/dashboard',async(req,res)=>{
    const projects=await project.find({mentor:mentorId}).populate('submissions');
    res.json(projects);
});

router.put('/evaluate', async (req, res) => {
  const { submissionId, marks, comments } = req.body;
  const submission = await Submission.findByIdAndUpdate(
    submissionId,
    { marks, comments, status: 'Completed' },
    { new: true }
  );
  res.json(submission);
});

module.exports = router;