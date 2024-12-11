const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  student: String,
  file: String,
  marks: Number,
  comments: String,
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('submissions', submissionSchema);