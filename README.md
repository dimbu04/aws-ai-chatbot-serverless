
# AI Chatbot Web Application (Serverless AWS Project)

This project demonstrates how to build a simple AI chatbot using a serverless architecture on AWS.

## Architecture

User → S3 Static Website → API Gateway → AWS Lambda → HuggingFace AI → Response

## Technologies Used

- Amazon S3 (Static Website Hosting)
- AWS Lambda
- Amazon API Gateway
- HuggingFace Inference API
- HTML, CSS, JavaScript

## Features

- Serverless architecture
- AI responses using HuggingFace model
- Static frontend hosted on AWS S3
- API backend using Lambda

## How it Works

1. User enters a question in the web interface.
2. JavaScript sends a request to API Gateway.
3. API Gateway triggers AWS Lambda.
4. Lambda calls the HuggingFace AI API.
5. The AI response is returned to the website.

## Project Architecture

S3 → API Gateway → Lambda → HuggingFace API

