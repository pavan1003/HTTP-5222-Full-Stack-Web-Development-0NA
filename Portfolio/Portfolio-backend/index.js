// Import required modules
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Import custom modules
const db = require("./modules/database/db");
const { sendEmail } = require("./modules/api/nodemailer");

// Initialize an Express application
const app = express();

// Set the port for the server, default to 8888 if not specified in environment variables
const port = process.env.PORT || "8888";

// Middleware to parse URL-encoded data and JSON data from incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*"); // Allow all headers
  next();
});

app.get("/api/careers", async (req, res) => {
  let careerList = await db.getCareers();
  if (!careerList.length) {
    await db.initializeCareers();
    careerList = await db.getCareers();
  }
  res.send(careerList);
});
app.get("/api/projects", async (req, res) => {
  let projectList = await db.getProjects();
  if (!projectList.length) {
    await db.initializeProjects();
    projectList = await db.getProjects();
  }
  res.send(projectList);
});
app.get("/api/skills", async (req, res) => {
  let skillList = await db.getSkills();
  if (!skillList.length) {
    await db.initializeSkills();
    skillList = await db.getSkills();
  }
  res.send(skillList);
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const result = await sendEmail(email, `[Contact form submission from ${name} <${email}>]`, message);

  if (result.success) {
    return res.status(200).json({ message: "Email sent successfully", info: result.info });
  } else {
    return res.status(500).json({ message: "Failed to send email", error: result.error });
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
