require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { YoutubeTranscript } = require("youtube-transcript");

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for frontend requests

// ✅ Welcome Route (For Testing)
app.get("/", (req, res) => {
    res.send("✅ YouTube Summary API is Running!");
});

// ✅ Extract YouTube Video ID
function getVideoId(youtubeUrl) {
    const match = youtubeUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11}).*/);
    return match ? match[1] : null;
}

// ✅ Fetch YouTube Transcript
async function fetchTranscript(videoId) {
    try {
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);
        return transcript.map(entry => entry.text).join(" ");
    } catch (error) {
        console.error("❌ Transcript Error:", error);
        return null;
    }
}

// ✅ Summarize Transcript using AI with enforced English response
async function summarizeTranscript(transcriptText, language) {
    try {
        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "user",
                        content: `Please summarize the following transcript in ${language}:\n\n${transcriptText}`
                    }
                ]
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("❌ AI Summarization Error:", error);
        return null;
    }
}

// ✅ Main API Endpoint: Get YouTube Notes
app.post("/youtube_summary", async (req, res) => {
    const { youtubeUrl, language } = req.body;

    if (!youtubeUrl) {
        return res.status(400).json({ error: "Missing YouTube URL in request body." });
    }

    const videoId = getVideoId(youtubeUrl);
    if (!videoId) {
        return res.status(400).json({ error: "Invalid YouTube URL." });
    }

    console.log(`📹 Fetching transcript for: ${youtubeUrl}...`);
    const transcript = await fetchTranscript(videoId);
    if (!transcript) {
        return res.status(500).json({ error: "Transcript not available for this video." });
    }

    console.log("📝 Generating summary...");
    const summary = await summarizeTranscript(transcript, language);
    if (!summary) {
        return res.status(500).json({ error: "Failed to generate summary." });
    }

    console.log("✅ Summary Generated: ", summary);

    // Send the "Join Class" button URL along with the response
    const joinClassUrl = "https://www.yourclasslink.com"; // You can update this URL

    res.json({ 
        videoUrl: youtubeUrl, 
        summary,
        joinClassUrl // Send the link for the Join Class button
    });
});

// ✅ Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});