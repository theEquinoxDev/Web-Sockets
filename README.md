WebSocket Demo (Node.js + React)

This is a simple project I built while learning WebSockets.
It has two parts:

A Node.js WebSocket server (using the ws package)

A React client that connects to the server

The client can send messages to the server, and the server can respond back.

📂 Project Structure
/server       → Node.js WebSocket server
/client       → React app (Vite or CRA)
/README.md    → This file

🚀 How to Run
1. Start the WebSocket Server
cd server
npm install
node index.js


The server will start on ws://localhost:8080

2. Start the React Client
cd client
npm install
npm run dev   # (for Vite) 
# or
npm start     # (for CRA)


Then open http://localhost:5173
 (or http://localhost:3000
 if using CRA).

💡 How It Works
Server (server/index.js)

Creates a WebSocket server on port 8080

Listens for client connections

If a client sends "ping", the server replies with "pong"

Client (client/src/App.jsx)

Connects to the WebSocket server

Lets the user type a message in an input field

Sends that message to the server when the Send button is clicked

When the server responds, it shows the response in an alert popup

📖 Example Interaction

Start the server and client

In the client’s input box, type:

ping


Click Send

The server replies with:

pong


→ This will show up in a popup alert.

🛠️ Tech Stack

Node.js + ws
 for the WebSocket server

React for the frontend client

✅ Notes

This is just a learning project

You can expand it by:

Broadcasting messages to all clients

Storing chat history

Handling multiple message types
