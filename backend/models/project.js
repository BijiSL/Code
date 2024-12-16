const mongoose=require('mongoose');
const mentor = require('./mentor');
const projectSchema=new mongoose.Schema({
    title: String,
    // description: String,
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'mentor' },
    submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'submission' }],
  });

module.exports=mongoose.model('projects',projectSchema);