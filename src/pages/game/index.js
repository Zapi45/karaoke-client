import { useNavigate } from "react-router";
import Button from "../../components/buttons/index";
import useQuery from "../../functions/useQuery";
import Gameboard from "../../components/gameboard/index";
import { useEffect, useState } from "react";
import PlayerInfo from "../../components/playerInfo";
import placeholder from "../../assets/img/profil.jpg";
import Chat from "../../components/chat";
import { socket } from "../../functions/socket";

const Game = () => {
  const query = useQuery();
  const currentCode = query.get("code");

  function connect() {
    socket.connect();
    socket.emit("join_room", currentCode);
  }

  useEffect(() => {
    connect();
  }, []);

  const [players, setPlayers] = useState([
    {
      name: query.get("username"),
      points: 1000,
      profil: placeholder,
    },
  ]);

  return (
    <>
      <h1>Game : {currentCode}</h1>
      <div className="interface">
        <Gameboard width={"18vw"}>
          {players.map((player) => (
            <PlayerInfo data={player} />
          ))}
        </Gameboard>
        <Gameboard width={"60vw"}></Gameboard>
        <Gameboard width={"18vw"}>
          <Chat socket={socket}></Chat>
        </Gameboard>
      </div>
    </>
  );
};

export default Game;
