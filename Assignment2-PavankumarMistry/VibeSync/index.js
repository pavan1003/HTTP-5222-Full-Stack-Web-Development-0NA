// Import required modules
const express = require("express");
const path = require("path");

// Initialize an Express application
const app = express();

// Import Groq api modules
const groq = require("./modules/groq/api");
// Import Spotify API module
const spotify = require("./modules/spotify/api");

// Set the port for the server, default to 8888 if not specified in environment variables
const port = process.env.PORT || "8888";

// Configure the application to use Pug as the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse URL-encoded data and JSON data from incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET request handler for the home page
app.get("/", async (request, response) => {
  response.render("index");
});

// POST request handler for predicting playlist
app.post("/predict-playlist", async (request, response) => {
  const userMood = request.body.mood;

  try {
    // Get the playlist name from Groq
    const playlistName = await groq.predictPlaylist(userMood);

    // Use the playlist name to search for a playlist on Spotify
    const spotifyPlaylist = await spotify.searchPlaylist(playlistName);

    // Send the playlist information back to the user
    response.render("playlist", { playlist: spotifyPlaylist });
  } catch (error) {
    console.error(error);
    response.render("playlist")
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
