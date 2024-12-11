const mongoose=require('mongoose');
const projectSchema=new mongoose.Schema({
    title: String,
    description: String,
    // mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' },
    // submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Submission' }],
  });

module.exports=mongoose.model('projects',projectSchema);