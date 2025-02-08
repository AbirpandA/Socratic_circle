# Socratic Circle

## Project Overview
Socratic Circle is a peer-to-peer skill exchange platform that turns knowledge into currency. Inspired by Renaissance learning, it allows users to teach and learn skills locally by earning and spending Skill Points (SP).

## Problem Statement
Traditional learning platforms are expensive, lack community engagement, and fail to utilize underused skills. Socratic Circle solves this by creating a trust-based, decentralized learning system where users exchange skills without money.

## Key Features
- *Teach Skills → Earn SP*: Share your knowledge and accumulate Skill Points.
- *Learn Skills → Spend SP*: Use your points to book sessions with mentors.
- *Rate & Review*: Ensure quality through a star-based rating system.
- *Connect Locally*: Find and book skill sessions in your community.

## AI Implementation: Socratic Mentor

### Overview
The Socratic Mentor chatbot is an AI-powered learning assistant that promotes critical thinking. Instead of providing direct answers, it asks guiding questions, encouraging users to think deeper.

### Core Features
- *Guided Q&A*: Encourages exploration by asking thought-provoking questions.
- *Learning Assistance*: Provides insights and hints to help users discover answers independently.

### How It Works
- Powered by Claude (Anthropic) or OpenAI’s ChatGPT API for real-time responses.
- Lightweight & Efficient: No complex AI models or recommendations—just interactive conversations.

### What It Does
✅ Stimulates Socratic-style dialogue for deeper learning.  
✅ Provides instant feedback without replacing human mentorship.  
✅ Keeps the experience engaging & interactive.  

### What It Doesn't Do
❌ No automated course recommendations.  
❌ No full lesson delivery—just thought-provoking discussions.  

## Additional AI Features

### Smart Search Functionality
- *AI Use*: Enhances search by predicting and suggesting relevant topics based on user input and past activity.
- *Benefit*: Improves user experience and helps users find content efficiently.


- *AI Use*: Suggests structured learning paths based on user interests.
- *Benefit*: Helps guide users without imposing restrictions.

### Chatbot Integration for Onboarding
- *AI Use*: Assists new users with platform navigation and best practices.
- *Benefit*: Reduces confusion and enhances user experience.


## Tech Stack

### Frontend
- *React.js* – Dynamic UI with state management using Context API.

### Backend
- *Node.js + Express.js* – RESTful APIs with JWT authentication.
- *MongoDB* – Stores users, sessions, and ratings.

## API Endpoints

### User Authentication
- *POST /signup* → Register a new user.
- *POST /login* → Authenticate and generate JWT.

### Session Management
- *GET /sessions* → Fetch available skill sessions.
- *POST /sessions* → Create a new session.
- *POST /sessions/:id/complete* → Mark a session as completed and update SP.

### Skill Points
- *GET /users/:id* → Fetch user's Skill Point balance.



video-link : https://drive.google.com/file/d/1zkJeVZX7R3ByWP56w0LNgpRYqg77gX-Q/view?usp=sharing
