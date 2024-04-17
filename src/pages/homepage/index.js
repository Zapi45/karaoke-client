import { useState } from "react";
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

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
    console.log(values);
  };

  const [join, setJoin] = useState(false);

  function joinGame() {
    navigate(`/game?username=${values.username}&code=${values.code}`);
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
          <FormTemplate onSubmit={() => joinGame()}>
            <TextInput
              id="username"
              onChange={() => handleChange("username")}
              label={"username"}
            ></TextInput>
            <TextInput
              id="code"
              onChange={() => handleChange("code")}
              label={"gamecode"}
            ></TextInput>
          </FormTemplate>
        </Popup>
      ) : (
        <></>
      )}
    </>
  );
};

export default Homepage;
