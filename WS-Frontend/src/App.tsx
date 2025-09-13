import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // State to store WebSocket connection
  const [socket, setSocket] = useState();

  // Reference to the input field (to read its value without re-renders)
  const inputRef = useRef(null);

  // Function: send a message to the server through the WebSocket
  function sendMessage() {
    if (!socket) {
      return; // If socket is not ready, do nothing
    }

    // Get the value typed in the input
    const message = inputRef.current.value;

    // Send the message to the WebSocket server
    // @ts-ignore → ignore TS warning since `socket` is loosely typed
    socket.send(message);
  }

  // Hook: run once when the component mounts
  useEffect(() => {
    // Open a WebSocket connection to the backend server
    const ws = new WebSocket("ws://localhost:8080");

    // Save the socket in React state so other parts can use it
    setSocket(ws);

    // Event listener: when the server sends a message to this client
    ws.onmessage = (event) => {
      // Show the server response in an alert popup
      alert(event.data);
    };
  }, []);

  return (
    <div>
      {/* Input box for typing messages */}
      <input ref={inputRef} type="text" placeholder="Message..." />

      {/* Button that sends the message to the server */}
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
