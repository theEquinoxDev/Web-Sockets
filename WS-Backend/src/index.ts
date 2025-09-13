// Import the WebSocketServer class from the 'ws' library
import { WebSocketServer } from "ws";

// Create a new WebSocket server that listens on port 8080
const wss = new WebSocketServer({ port: 8080 });

// Event listener: when a new client connects to the WebSocket server  
wss.on("connection", function (socket) {
  console.log("User connected");

  // Event listener: when this specific client sends a message
  socket.on("message", (e) => {
    // Convert the message buffer to string
    if (e.toString() === "ping") {
      // If the client sends "ping", reply with "pong"
      socket.send("pong");
    }
  });
});
