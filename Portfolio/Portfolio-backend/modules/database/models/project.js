const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  liveUrl: {
    type: String,
  },
  githubUrl: {
    type: String,
  },
  projectImage: {
    type: String,
  },
});

module.exports = mongoose.model("Project", projectSchema);
