const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  jobStartDate: {
    type: Date,
    required: true,
  },
  jobEndDate: {
    type: Date,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: Array,
  },
  careerImage: {
    type: String,
  },
});

module.exports = mongoose.model("Career", careerSchema);
