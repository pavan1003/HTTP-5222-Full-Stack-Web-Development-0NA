const fetch = require("node-fetch");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Retrieve client ID and secret from environment variables
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

let accessToken = "";

/**
 * Retrieves an access token from the Spotify API using client credentials.
 * @returns {string} - The spotify access token.
 */
async function getAccessToken() {
  // Set up the options for the token request
  const authOptions = {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  };

  try {
    // Make a POST request to the Spotify API to get an access token
    const response = await fetch("https://accounts.spotify.com/api/token", authOptions);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Spotify Auth Error: ${response.statusText}`);
    }

    // Parse the JSON response to get the access token
    const data = await response.json();
    accessToken = data.access_token;

    // Return the access token
    return accessToken;
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error("Error getting access token:", error.message);
    throw error;
  }
}

module.exports = { getAccessToken };
