const mongoose=require('mongoose');
const projectSchema=new mongoose.Schema({
    title: String,
    projectassign:{type:mongoose.Schema.Types.ObjectId,ref:"Mentor"},
    // description: String,
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'mentor' },
  submissions:[{
    student: String,
      status: { type: String,enum:['Approved','Pending','None'], default: 'Pending' },
      marks: Number,
      comments: String,
      submissionDate:{type:Date,default:Date.now},
  },],
  });

module.exports=mongoose.model('projects',projectSchema);