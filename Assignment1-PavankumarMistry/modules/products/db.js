const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

// Set up Camera Schema and model
const CameraSchema = new mongoose.Schema({
  model: String,
  brand: String,
  category: String,
  imgPath: String,
  description: String,
  make: Number,
  rating: Number,
  price: Number,
  featured: Boolean,
});

const Camera = mongoose.model("Camera", CameraSchema);

// MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); // Connect to MongoDB
}

// Get all cameras or featured cameras from the cameras collection
async function getCameras(featuredOnly = false) {
  await connect();
  if (featuredOnly) {
    return await Camera.find({ featured: true });
  } else {
    return await Camera.find({});
  }
}

async function getSingleCamera(id) {
  await connect();
  return await Camera.findOne({ _id: id });
}

// Initialize cameras collection with some data
async function initializeCameras() {
  const cameraList = [
    {
      model: "Hero 10 Black",
      brand: "Go PRO",
      category: "Action Camera",
      imgPath: "hero_10_black.jpg",
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
      imgPath: "canon_eos_r5.jpg",
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
      imgPath: "sony_alpha_a7_iii.jpg",
      make: 2020,
      rating: 4.7,
      price: 1999,
      featured: true,
      description:
        "The Sony Alpha a7 III is a versatile mirrorless camera with a 24.2MP full-frame sensor, 4K video recording, fast autofocus, and excellent low-light performance, suitable for both enthusiasts and professionals.",
    },
  ];
  await connect();
  await Camera.insertMany(cameraList);
}

// Function to add a camera to the cameras collection
async function addCamera(
  cameraModel,
  cameraBrand,
  cameraCategory,
  cameraImgPath,
  cameraMake,
  cameraRating,
  cameraPrice,
  featured = false,
  description
) {
  let newCamera = new Camera({
    model: cameraModel,
    brand: cameraBrand,
    category: cameraCategory,
    imgPath: cameraImgPath,
    make: cameraMake,
    rating: cameraRating,
    price: cameraPrice,
    featured: featured,
    description: description,
  });
  await connect();
  await newCamera.save();
}

module.exports = {
  getCameras,
  getSingleCamera,
  initializeCameras,
  addCamera,
};
