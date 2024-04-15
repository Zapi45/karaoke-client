import React, { useState, useEffect } from 'react';
import { Button, StartButton, PauseButton, ResetButton } from "../components/buttons";
import "./App.css";
import io from 'socket.io-client';

const MyComponent = () => {
 const [socket, setSocket] = useState(null);

 useEffect(() => {
    const socketInstance = io('http://localhost:3000/');
    setSocket(socketInstance);

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
      {/* Ajout des boutons Start, Pause, Reset */}
      <StartButton functions={() => console.log("Start")} disabled={false} />
      <PauseButton functions={() => console.log("Pause")} disabled={false} />
      <ResetButton functions={() => console.log("Reset")} disabled={false} />
    </div>
 );
}

export default App;
