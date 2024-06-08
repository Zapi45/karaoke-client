import { useState } from "react";
import TextInput from "../form/text";
import { useEffect } from "react";
import io from "socket.io-client";
import "./index.css";
import Button from "../buttons";

const Chat = (props) => {
  const [prevMessage, setPrevMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (prop) => (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    props.socket.on("messageSent", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  function handleMessage(e) {
    e.preventDefault();
    console.log(e);
    if (value) {
      props.socket.emit("chat message", value);
      setValue("");
    }
  }

  return (
    <div className="chat">
      <ul id="messages">
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
      <form id="form" onSubmit={(e) => handleMessage(e)}>
        <TextInput
          value={value}
          id="message"
          onChange={handleChange()}
          required
        />
        <Button text={"Envoyer"} color={"lightblue"} />{" "}
      </form>
    </div>
  );
};

export default Chat;
