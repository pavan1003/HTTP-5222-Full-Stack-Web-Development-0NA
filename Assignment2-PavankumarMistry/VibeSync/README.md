# VibeSync

VibeSync is a Node.js web application that suggests Spotify playlists based on the user's current mood. Enter how you're feeling, and VibeSync will provide you with a playlist that matches your vibe!

## Features

- **Mood-based Playlist Suggestions**: Enter your mood and get a Spotify playlist recommendation.
- **Integration with Groq API**: Uses Groq API to interpret the user's mood and suggest a playlist name.
- **Integration with Spotify API**: Searches for and retrieves the suggested playlist from Spotify.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [How to Use](#how-to-use)
- [API Credits](#api-credits)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/pavan1003/VibeSync.git
   cd VibeSync
   ```

2. Install the required dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables (see [Environment Variables](#environment-variables)).

## Usage

1. Start the application:
   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:8888`.

3. Enter your mood in the text area and submit the form to get a playlist recommendation.

## Environment Variables

Create a `.env` file in the root directory of your project and add the following variables:

```plaintext
GROQ_API_KEY=your_groq_api_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
```

## How to Use

1. **Enter Your Mood**:
   - On the home page, there is a text area where you can type how you are feeling. For example, you can enter "I am feeling happy", "Everything feels artistic and imaginative", or any other mood description.

2. **Submit the Form**:
   - After entering your mood, click the submit button to send your mood to the server. The server will process your mood using the Groq API to get a playlist name.

3. **Wait for Processing**:
   - The application will take a moment to process your mood and find the best playlist for you using the Spotify API.

4. **Enjoy the Recommended Playlist**:
   - Once the playlist is found, it will be displayed on a new screen with the playlist name, owner, description, and an embedded Spotify player for you to listen to the tracks.

### Example Moods to Try

- "I am feeling energetic and ready to conquer the world."
- "I'm in a relaxed and mellow mood."
- "Feeling nostalgic and reminiscent of the past."
- "I am in a creative and artistic mindset."
- "Everything feels adventurous and exciting today."

## API Credits

- **Groq API**: Used for interpreting the user's mood and suggesting a playlist name. Learn more at [Groq API](https://groq.com/).
- **Spotify API**: Used for searching and retrieving playlists based on the suggested name. Learn more at [Spotify API](https://developer.spotify.com/documentation/web-api/).
