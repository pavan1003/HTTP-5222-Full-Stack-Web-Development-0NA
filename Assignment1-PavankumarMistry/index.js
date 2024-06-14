const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

// Load the environment variables from .env
dotenv.config();

// Load db.js
const db = require("./modules/products/db");

// Set up the Express app
const app = express();
const port = process.env.PORT || "8888";

// Set up application template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Set up folder for static files
app.use(express.static(path.join(__dirname, "public")));

// Set up URL encoding to allow form submission with data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET to render home page
app.get("/", async (request, response) => {
  let cameraList = await db.getCameras(false);
  if (!cameraList.length) {
    await db.initializeCameras();
    cameraList = await db.getCameras(false);
  }
  let featuredCameraList = await db.getCameras(true);
  response.render("home", { cameras: cameraList, featuredCameras: featuredCameraList });
});

//GET to render about-us page
app.get("/camera/:id", async (request, response) => {
  let singleCamera = await db.getSingleCamera(request.query.id);
  response.render("product-detail", { camera: singleCamera });
});

//GET to render about-us page
app.get("/about-us", async (request, response) => {
  response.render("about-us");
});

//GET to render add-camera page
app.get("/admin/add-camera", async (request, response) => {
  response.render("add-camera");
});

// POST to handle the form submission to add a new camera
app.post("/admin/add-camera/submit", async (request, response) => {
  // modern JS destructing
  const { model, brand, category, imgPath, make, rating, price, featured, description } =
    request.body;

  // Call the addCamera function from db.js
  await db.addCamera(
    model,
    brand,
    category,
    imgPath,
    make,
    parseFloat(rating),
    parseFloat(price),
    !!featured, //converting to boolean equivalent
    description
  );
  response.redirect("/");
});

// Set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
