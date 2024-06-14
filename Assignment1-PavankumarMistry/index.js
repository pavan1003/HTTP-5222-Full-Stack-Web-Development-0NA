// Import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Import custom database module
const db = require("./modules/products/db");

// Initialize an Express application
const app = express();

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
  // Fetch the list of cameras from the database
  let cameraList = await db.getCameras(false);

  // If no cameras are found, initialize the camera database and fetch the list again
  if (!cameraList.length) {
    await db.initializeCameras();
    cameraList = await db.getCameras(false);
  }

  // Fetch the list of featured cameras
  let featuredCameraList = await db.getCameras(true);

  // Render the home page with the list of cameras and featured cameras
  response.render("home", { cameras: cameraList, featuredCameras: featuredCameraList });
});

// GET request handler for the camera detail page
app.get("/camera/:id", async (request, response) => {
  // Fetch details of a single camera based on the provided ID
  let singleCamera = await db.getSingleCamera(request.query.id);

  // Render the product detail page with the fetched camera details
  response.render("product-detail", { camera: singleCamera });
});

// GET request handler for the about-us page
app.get("/about-us", async (request, response) => {
  // Render the about-us page
  response.render("about-us");
});

// GET request handler for the add-camera admin page
app.get("/admin/add-camera", async (request, response) => {
  // Render the add-camera form page
  response.render("add-camera");
});

// POST request handler to process the form submission for adding a new camera
app.post("/admin/add-camera/submit", async (request, response) => {
  // Destructure the request body to get camera details
  const { model, brand, category, image, make, rating, price, featured, description } =
    request.body;

  // Call the addCamera function from db.js to add the new camera to the database
  await db.addCamera(
    model,
    brand,
    category,
    image,
    make,
    parseFloat(rating), // Convert rating to a float
    parseFloat(price), // Convert price to a float
    !!featured, // Convert featured to a boolean
    description
  );

  // Redirect to the home page after adding the camera
  response.redirect("/");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
