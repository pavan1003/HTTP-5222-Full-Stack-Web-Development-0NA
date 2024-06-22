const express = require("express");
const path = require("path");
const libraries = require("./components/libraries");

const app = express();
const port = process.env.PORT || "8888";

// Set views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Set up static path for CSS, client-side JS, and image files
app.use(express.static(path.join(__dirname, "public")));

// Route for the home page
app.get("/", async (request, response) => {
  let data = await libraries.loadLibraries();
  response.render("index", { title: "Home", libraries: data });
});

// Route for individual library pages
app.get("/library/:id", async (request, response) => {
  let libraryData = await libraries.getLibraryById(request.params.id);
  response.render("library", { title: "Library", library: libraryData });
});

// Server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
