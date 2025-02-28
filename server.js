import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chat from './api/routes/generateChat.js'

dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use('/api/gemini', chat)