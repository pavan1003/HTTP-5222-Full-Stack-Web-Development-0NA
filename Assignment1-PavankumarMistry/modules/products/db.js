// Import the mongoose module
const mongoose = require("mongoose");

// Construct the MongoDB connection URL using environment variables
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

// Define the Camera schema
const CameraSchema = new mongoose.Schema({
  model: String,
  brand: String,
  category: String,
  image: String,
  description: String,
  make: Number,
  rating: Number,
  price: Number,
  featured: Boolean,
});

// Create the Camera model from the schema
const Camera = mongoose.model("Camera", CameraSchema);

// Function to connect to MongoDB
async function connect() {
  await mongoose.connect(dbUrl); // Establish connection to MongoDB
}

// Function to get all cameras or only featured cameras from the collection
async function getCameras(featuredOnly = false) {
  await connect(); // Ensure the database connection is established
  if (featuredOnly) {
    // Return only featured cameras if featuredOnly is true
    return await Camera.find({ featured: true });
  } else {
    // Return all cameras
    return await Camera.find({});
  }
}

// Function to get a single camera by its ID
async function getSingleCamera(id) {
  // Ensure the database connection is established
  await connect();
  // Find and return the camera by ID
  return await Camera.findOne({ _id: id });
}

// Function to initialize the cameras collection with some data
async function initializeCameras() {
  // Define an array of camera objects to be inserted into the collection
  const cameraList = [
    {
      model: "Hero 10 Black",
      brand: "Go PRO",
      category: "Action Camera",
      image: "/img/hero_10_black.png",
      make: 2022,
      rating: 4.2,
      price: 289,
      featured: true,
      description:
        "The Hero 10 Black is the latest action camera from Go PRO, featuring 5.3K video recording, improved stabilization, and enhanced performance for capturing your adventures.",
    },
    {
      model: "Canon EOS R5",
      brand: "Canon",
      category: "Mirrorless",
      image: "/img/canon_eos_r5.png",
      make: 2021,
      rating: 4.8,
      price: 3899,
      featured: false,
      description:
        "The Canon EOS R5 is a full-frame mirrorless camera with 8K video recording capability, advanced autofocus, and high-resolution image quality, making it ideal for professional photographers and videographers.",
    },
    {
      model: "Sony Alpha a7 III",
      brand: "Sony",
      category: "Mirrorless",
      image: "/img/sony_alpha_a7_iii.png",
      make: 2020,
      rating: 4.7,
      price: 1999,
      featured: true,
      description:
        "The Sony Alpha a7 III is a versatile mirrorless camera with a 24.2MP full-frame sensor, 4K video recording, fast autofocus, and excellent low-light performance, suitable for both enthusiasts and professionals.",
    },
  ];

  // Ensure the database connection is established
  await connect();
  // Insert the list of cameras into the collection
  await Camera.insertMany(cameraList);
}

// Function to add a new camera to the cameras collection
async function addCamera(
  cameraModel,
  cameraBrand,
  cameraCategory,
  cameraImage,
  cameraMake,
  cameraRating,
  cameraPrice,
  featured = false,
  description
) {
  // Create a new Camera object with the provided details
  let newCamera = new Camera({
    model: cameraModel,
    brand: cameraBrand,
    category: cameraCategory,
    image: cameraImage,
    make: cameraMake,
    rating: cameraRating,
    price: cameraPrice,
    featured: featured,
    description: description,
  });

  // Ensure the database connection is established
  await connect();
  // Save the new camera to the collection
  await newCamera.save();
}

// Export the database functions for use in other parts of the application
module.exports = {
  getCameras,
  getSingleCamera,
  initializeCameras,
  addCamera,
};
