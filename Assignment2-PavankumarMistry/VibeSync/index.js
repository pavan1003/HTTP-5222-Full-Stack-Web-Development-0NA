// Import required modules
const express = require("express");
const path = require("path");

// Initialize an Express application
const app = express();

// Import custom groq api module
const groq = require("./modules/groq/api");

// Set the port for the server, default to 8888 if not specified in environment variables
const port = process.env.PORT || "8888";

// Configure the application to use Pug as the template engine
app.set("views", path.join(__dirname, "views")); // Set the views directory
app.set("view engine", "pug"); // Set Pug as the template engine

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse URL-encoded data and JSON data from incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET request handler for the home page
app.get("/", async (request, response) => {
  response.render("index");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
