const fetch = require('node-fetch'); // Utiliser require avec CommonJS

async function getTranslate(text, langue) {
    const data = {
        text: text,
        langue: langue,
        target: "mg"
    };

    try {
        const response = await fetch("https://translate-pa.googleapis.com/v1/translateHtml", {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json+protobuf",
                "x-goog-api-key": "AIzaSyATBXajvzQLTDHEQbcpq0Ihe0vWDHmO520"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        console.error("Error during translation:", error);
        throw error;
    }
}

export default getTranslate;

