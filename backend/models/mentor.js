const mongoose=require('mongoose');
const mentorSchema=mongoose.Schema({
  name: String,
  email:String,
  // email: { type: String, unique: true },
  phone: String,
  password: String
  //Projects:String
  // projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
})

const mentor=mongoose.model('mentors',mentorSchema);
module.exports=mentor;