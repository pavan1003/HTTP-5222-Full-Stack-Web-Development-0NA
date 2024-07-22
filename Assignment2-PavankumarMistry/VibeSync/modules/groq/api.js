const Groq = require("groq-sdk");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Initialize Groq with API key from environment variables
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

/**
 * Predicts a playlist name based on the user's mood.
 * @param {string} userMood - The mood of the user as a string.
 * @returns {Promise<string>} - A promise that resolves to the playlist name.
 */
async function predictPlaylist(userMood) {
  try {
    // Send a request to Groq's chat completions API with the user's mood
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a word definer. Answer in 1 to 3 words. Give a playlist name for the given mood of the user.",
        },
        {
          role: "user",
          content: userMood,
        },
      ],
      model: "llama3-8b-8192",
    });
    
    let playlistName = response.choices[0]?.message?.content;

    // Remove leading and trailing quotes if they exist
    playlistName = playlistName?.replace(/^"|"$/g, "").trim();

    // Return the playlist name
    return playlistName;
  } catch (error) {
    // Log the error and rethrow it for handling upstream
    console.error("Error predicting playlist:", error.message);
    throw error;
  }
}

// Export the predictPlaylist function for use in other modules
module.exports = { predictPlaylist };
