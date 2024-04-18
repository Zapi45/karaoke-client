import { useState, useEffect } from "react";
import Button from "../../components/buttons/index";
import Gameboard from "../../components/gameboard/index";
import { useNavigate } from "react-router";
import Popup from "../../components/popup";
import FormTemplate from "../../components/form/Index";
import TextInput from "../../components/form/text";

const Homepage = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    code: "",
  });

  const [join, setJoin] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const codes = ["ABCDEF", "AREDFF"];

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
    console.log(values);
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

  return (
    <>
      <h1>Homepage</h1>
      <div className="interface">
        <Gameboard width={"60vw"}>
          <Button
            text={"Rejoindre"}
            color={"lightgreen"}
            functions={() => setJoin(true)}
          />
          <Button
            text={"Créer"}
            color={"lightblue"}
            functions={() => alert("test")}
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
            ></TextInput>
          </FormTemplate>
        </Popup>
      ) : (
        <></>
      )}
      {invalid ? (
        <Popup>
          <h3>La salle est inexistante</h3>
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
