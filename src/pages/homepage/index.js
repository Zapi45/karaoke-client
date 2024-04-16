import { useState } from "react";
import Button from "../../components/buttons/index";
import Gameboard from "../../components/gameboard/index";
import { useNavigate } from "react-router";
import Popup from "../../components/popup";

const Homepage = () => {
  const navigate = useNavigate();

  const [join, setJoin] = useState(false);

  return (
    <>
      <h1>Homepage</h1>
      <div className="interface">
        <Gameboard width={"60vw"}>
          <Button
            text={"join game"}
            color={"green"}
            functions={() => setJoin(true)}
          />
          <Button
            text={"create game"}
            color={"green"}
            functions={() => alert("test")}
          />
        </Gameboard>
      </div>
      {join ? <Popup></Popup> : <></>}
    </>
  );
};

export default Homepage;
