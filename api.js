import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { decode } from 'html-entities';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
dotenv.config();



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const token = process.env.google_token;

const app = express();
app.use(bodyParser.json());

// Fonction pour effectuer la traduction
async function getTranslate(text, langue = "auto") {
    const data = JSON.stringify([[[text], langue, "mg"], "te"]);
    const url = "https://translate-pa.googleapis.com/v1/translateHtml";
    const apiKey =token;
    try {
        const response = await axios.post(url, data, {
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json+protobuf",
                "x-goog-api-key": apiKey,
            },
        });
        return response.data;
    } catch (err) {
        console.error("Error during translation:", err.message);
        throw new Error("Failed to fetch translation");
    }
}

// Fonction pour décoder le texte HTML
function decodeText(responseText) {
    return decode(responseText);
}

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.post('/translate', async (req, res) => {
    const { text, langue } = req.body;
    try {
        const translation = await getTranslate(text, langue);
        // Décoder le texte traduit
        const decodedTranslation = decodeText(translation[0][0]);
        res.json({ translation: decodedTranslation, langue: langue });
    } catch (err) {
        res.status(500).json({ message: 'Translation failed', error: err.message });
    }
});

const PORT = process.env.PORT || 1010;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});