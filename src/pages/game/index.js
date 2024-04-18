import { useNavigate } from "react-router";
import Button from "../../components/buttons/index";
import useQuery from "../../functions/useQuery";
import Gameboard from "../../components/gameboard/index";
import { useEffect } from "react";

const Game = () => {
  const query = useQuery();

  const currentCode = query.get("code");

  return (
    <>
      <h1>Game : {}</h1>
      <div className="interface">
        <Gameboard width={"18vw"}></Gameboard>
        <Gameboard width={"60vw"}></Gameboard>
        <Gameboard width={"18vw"} />
      </div>
    </>
  );
};

export default Game;
