const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
  student: String,
  file: String,
  marks: Number,
  comments: String,
  status: { type: String,enum:['completed','pending'], default: 'Pending' },
});

module.exports = mongoose.model('submissions', submissionSchema);