import Button from "../../components/buttons/index";
import Gameboard from "../../components/gameboard/index";

const Homepage = () => {
  return (
    <>
      <h1>Game</h1>
      <div className="interface">
        <Gameboard width={"60vw"}>
          <Button
            text={"join game"}
            color={"green"}
            functions={() => alert("test")}
          />
          <Button
            text={"create game"}
            color={"green"}
            functions={() => alert("test")}
          />
        </Gameboard>
      </div>
    </>
  );
};

export default Homepage;
