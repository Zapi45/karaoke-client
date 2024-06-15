import { useState } from "react";
import TextInput from "../form/text";
import { useEffect } from "react";
import io from "socket.io-client";
import "./index.css";
import Button from "../buttons";
import useQuery from "../../functions/useQuery";

const Chat = (props) => {
  const [prevMessage, setPrevMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (prop) => (e) => {
    setValue(e.target.value);
  };

  const query = useQuery();
  const currentCode = query.get("code");

  useEffect(() => {
    props.socket.on("messageSent", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  function handleMessage(e) {
    e.preventDefault();
    if (value) {
      props.socket.emit("chat message", value, currentCode);
      setValue("");
    }
  }

  return (
    <div className="chat">
      <ul id="messages">
        {messages.map((message, index) => (
          <li key={message + index}>{message}</li>
        ))}
      </ul>
      <form id="form" onSubmit={(e) => handleMessage(e)}>
        <TextInput
          value={value}
          id="message"
          onChange={handleChange()}
          required
        />
        <Button type="submit" text={"Envoyer"} color={"lightblue"} />{" "}
      </form>
    </div>
  );
};

export default Chat;
