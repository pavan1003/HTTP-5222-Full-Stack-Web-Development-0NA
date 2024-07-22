const fetch = require('node-fetch');
const { getAccessToken } = require('./auth');

/**
 * Searches for a Spotify playlist by name.
 * @param {string} playlistName - The name of the playlist to search for.
 * @returns {Promise<Object>} - A promise that resolves to the first playlist found in the search results.
 */
async function searchPlaylist(playlistName) {
  // Retrieve the access token for Spotify API authentication
  const accessToken = await getAccessToken();

  try {
    // Make a request to the Spotify Search API to find a playlist by name
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(playlistName)}&type=playlist&limit=1`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Spotify Search Error: ${response.statusText}`);
    }

    // Parse the JSON response from Spotify
    const data = await response.json();
    
    // Return the first playlist item from the search results
    return data.playlists.items[0];
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error("Error searching for playlist:", error.message);
    throw error;
  }
}

module.exports = { searchPlaylist };
