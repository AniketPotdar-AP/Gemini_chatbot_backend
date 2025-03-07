# Gemini AI Model Integration

## Overview

This project integrates **Google's Gemini AI model** into a **Node.js backend** to generate text-based responses. The backend handles user queries, sends requests to the Gemini API, and returns AI-generated text responses.

## Features

- **Gemini API Integration**: Uses Google's Gemini AI to generate text-based responses.
- **Node.js with Express.js**: Lightweight and scalable server.
- **Secure API Calls**: Uses API keys for authentication.
- **Error Handling**: Robust error management for API failures.
- **Easy Deployment**: Can be deployed on any cloud platform.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/)
- A valid **Google Gemini API Key**

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/AniketPotdar-AP/Gemini_chatbot_backend.git
   cd Gemini_chatbot_backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```
2. Send a POST request to `http://localhost:3000/generate-text` with JSON payload:
   ```json
   {
     "prompt": "What is artificial intelligence?"
   }
   ```
3. Example response:
   ```json
   {
     "response": "Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn."
   }
   ```

## API Endpoint

### **POST /generate-text**

- **Request Body:**
  ```json
  {
    "prompt": "Your text prompt here"
  }
  ```
- **Response:**
  ```json
  {
    "response": "AI-generated text response"
  }
  ```

## Project Structure

```
├── server.js  # Main server file
├── routes/
│   ├── gemini.js  # Handles API calls to Gemini
├── .env  # Stores API keys
├── package.json  # Dependencies and scripts
└── README.md  # Project documentation
```

## Dependencies

- Express.js
- dotenv (for environment variables)
