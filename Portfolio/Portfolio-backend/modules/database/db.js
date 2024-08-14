// Import the mongoose module
const mongoose = require("mongoose");
const project = require("./models/project.js");
const career = require("./models/career.js");
const skill = require("./models/skill.js");

// Construct the MongoDB connection URL using environment variables
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

// Function to connect to MongoDB
async function connect() {
  await mongoose.connect(dbUrl); // Establish connection to MongoDB
}

// Function to initialize the careers collection with some data
async function initializeCareers() {
  // Define an array of career objects to be inserted into the collection
  const careerList = [
    {
      jobTitle: "Full Stack Developer Intern",
      companyName: "Vardaam Web Solutions Pvt. Ltd.",
      jobStartDate: new Date("2022-04-01"),
      jobEndDate: new Date("2022-07-31"),
      jobLocation: "Vadodara, Gujarat, India",
      jobDescription: ["Developed web applications", "Collaborated with cross-functional teams"],
      careerImage: "/career/Vardaam.png",
    },
  ];
  // Ensure the database connection is established
  await connect();
  // Insert the list of career into the collection
  await career.insertMany(careerList);
}
// Function to initialize the projects collection with some data
async function initializeProjects() {
  // Define an array of project objects to be inserted into the collection
  const projectList = [
    {
      projectTitle: "Portfolio Website",
      projectDescription: "A personal portfolio website built using React and Node.js.",
      liveUrl: "https://pavanmistry.me",
      githubUrl: "https://github.com/pavan1003/pavan1003.github.io.git",
      projectImage: "/project/Portfolio.png",
    },
  ];
  // Ensure the database connection is established
  await connect();
  // Insert the list of projects into the collection
  await project.insertMany(projectList);
}
// Function to initialize the skills collection with some data
async function initializeSkills() {
  // Define an array of skill objects to be inserted into the collection
  const skillList = [
    {
      skillName: "JavaScript",
      skillImage: "/skill/JavaScript.png",
    },
  ];
  // Ensure the database connection is established
  await connect();
  // Insert the list of skills into the collection
  await skill.insertMany(skillList);
}

async function getCareers() {
  await connect(); // Ensure the database connection is established
  return await career.find({});
}

async function getProjects() {
  await connect(); // Ensure the database connection is established
  return await project.find({});
}

async function getSkills() {
  await connect(); // Ensure the database connection is established
  return await skill.find({});
}

// Export the database functions for use in other parts of the application
module.exports = {
  getCareers,
  getProjects,
  getSkills,
  initializeCareers,
  initializeProjects,
  initializeSkills,
};
