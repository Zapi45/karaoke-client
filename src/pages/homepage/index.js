import { useState, useEffect } from "react";
import Button from "../../components/buttons/index";
import Gameboard from "../../components/gameboard/index";
import { useNavigate } from "react-router";
import Popup from "../../components/popup";
import FormTemplate from "../../components/form/Index";
import TextInput from "../../components/form/text";
import { fetchApi } from "../../functions/fetchApi";
import { io } from "socket.io-client";

const Homepage = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    code: "",
  });

  const [join, setJoin] = useState(false);
  const [create, setCreate] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const codes = ["ABCDEF", "AREDFF"];

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  function joinGame(e) {
    e.preventDefault();
    if (codes.some((code) => values.code === code)) {
      navigate(`/game?username=${values.username}&code=${values.code}`);
    } else {
      setJoin(false);
      setInvalid(true);
    }
  }

  async function createGame(e) {
    e.preventDefault();
    let data = await fetchApi("GET", "create-room");
    navigate(`/game?username=${values.username}&code=${data.room_code}`);
  }

  return (
    <>
      <h1>Blind Karaoke</h1>
      <div className="interface">
        <Gameboard width={"60vw"}>
          <Button
            text={"Rejoindre"}
            color={"lightgreen"}
            type="button"
            functions={() => setJoin(true)}
          />
          <Button
            text={"Créer"}
            type="button"
            color={"lightblue"}
            functions={() => setCreate(true)}
          />
        </Gameboard>
      </div>
      {join ? (
        <Popup>
          <FormTemplate onSubmit={(e) => joinGame(e)}>
            <TextInput
              id="username"
              onChange={handleChange("username")}
              label={"username"}
              required
            ></TextInput>
            <TextInput
              id="code"
              onChange={handleChange("code")}
              label={"gamecode"}
              required
            ></TextInput>
          </FormTemplate>
        </Popup>
      ) : (
        <></>
      )}
      {create ? (
        <Popup>
          <FormTemplate onSubmit={(e) => createGame(e)}>
            <TextInput
              id="username"
              onChange={handleChange("username")}
              label={"username"}
              required
            ></TextInput>
          </FormTemplate>
        </Popup>
      ) : (
        <></>
      )}
      {invalid ? (
        <Popup>
          <h3>La salle n'existe pas</h3>
          <Button
            text={"Retour"}
            color={"lightred"}
            functions={() => setInvalid(false)}
          />
        </Popup>
      ) : (
        <></>
      )}
    </>
  );
};

export default Homepage;
