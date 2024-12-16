const mongoose=require('mongoose');
const projectassignSchema=new mongoose.Schema({
    title: String,
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'mentors' }
    
  });

module.exports=mongoose.model('projectassigns',projectassignSchema);