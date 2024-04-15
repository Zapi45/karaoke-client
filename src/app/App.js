import Button from "../components/buttons";
import "./App.css";
import io from 'socket.io-client';

import React, { useState, useEffect } from 'react';


const MyComponent = () => {
 const [socket, setSocket] = useState(null);

 useEffect(() => {
    const socketInstance = io('http://localhost:3000/'); // Remplacez 'http://localhost:5000' par l'URL de votre serveur Socket.IO
    setSocket(socketInstance);

    // Écoutez les événements émis par le serveur
    socketInstance.on('connect', () => {
      console.log('Connecté au serveur');
    });

    socketInstance.on('message', (data) => {
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
      <h1>ALLO</h1>
      <Button text={"golem"} color={"green"} functions={() => alert("test")} />
    </div>
  );
}

export default App;
