import { useState } from "react";
import TextInput from "../form/text";
import { useEffect } from "react";
import io from "socket.io-client";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const handleChange = (prop) => (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const socketInstance = io("http://localhost:8000"); // Remplacez 'http://localhost:5000' par l'URL de votre serveur Socket.IO
    setSocket(socketInstance);

    console.log(socketInstance);
    // Écoutez les événements émis par le serveur
    socketInstance.on("connect", () => {
      console.log("Connecté au serveur");
    });

    socketInstance.on("messageSent", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  function handleMessage(e) {
    e.preventDefault();
    if (value) {
      socket.emit("chat message", value);
      setValue("");
    }
  }

  return (
    <>
      <ul id="messages">
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
      <form id="form" onSubmit={(e) => handleMessage(e)}>
        <TextInput
          id="message"
          onChange={handleChange()}
          label={"message"}
          required
        />
        <button>Send</button>
      </form>
    </>
  );
};

export default Chat;
