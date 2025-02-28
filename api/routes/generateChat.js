import { GoogleGenerativeAI } from "@google/generative-ai";
import express from 'express';
const router = express.Router()
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/generate", async (req, res) => {
    try {
        const { prompt } = req.body;
        const result = await model.generateContent(prompt);
        const response = await result.response.text();
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;