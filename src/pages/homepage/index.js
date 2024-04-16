import Button from "../../components/buttons/index";
import Gameboard from "../../components/gameboard/index";
import { useNavigate } from "react-router";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Homepage</h1>
      <div className="interface">
        <Gameboard width={"60vw"}>
          <Button
            text={"join game"}
            color={"green"}
            functions={() => navigate("/game")}
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
