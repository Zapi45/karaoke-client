import { useNavigate, useQuery } from "react-router";
import Button from "../../components/buttons/index";
import Gameboard from "../../components/gameboard/index";

const Game = () => {
  const query = useQuery();

  return (
    <>
      <h1>Game : {params.code}</h1>
      <div className="interface">
        <Gameboard width={"18vw"}></Gameboard>
        <Gameboard width={"60vw"}></Gameboard>
        <Gameboard width={"18vw"} />
      </div>
    </>
  );
};

export default Game;
