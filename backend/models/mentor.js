const mongoose=require('mongoose');
const mentorSchema=mongoose.Schema({
  name: String,
  email:{ type: String, unique: true },
  phone: String,
  password: String,
  // project:String
  project: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }],
})

const mentor=mongoose.model('mentors',mentorSchema);
module.exports=mentor;