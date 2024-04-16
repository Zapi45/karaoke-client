import "./App.css";
import io from "socket.io-client";

import React, { useState, useEffect } from "react";
import Homepage from "../pages/homepage";
import Game from "../pages/game";

const MyComponent = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io("http://localhost:3000/"); // Remplacez 'http://localhost:5000' par l'URL de votre serveur Socket.IO
    setSocket(socketInstance);

    // Écoutez les événements émis par le serveur
    socketInstance.on("connect", () => {
      console.log("Connecté au serveur");
    });

    socketInstance.on("message", (data) => {
      console.log(`Message reçu: ${data}`);
    });

    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, []);

  // Le reste de votre composant ici
};

function App() {
  return (
    <div className="App">
      <Homepage />
      <Game />
    </div>
  );
}

export default App;
