import Groq from "groq-sdk";
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function predictPlaylist(userMood) {
  return await groq.chat.completions.create({
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
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
    stop: null,
  });
}

module.exports = { predictPlaylist };