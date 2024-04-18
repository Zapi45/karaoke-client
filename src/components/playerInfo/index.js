import "./index.css";

const PlayerInfo = (props) => {
  let data = props.data;
  return (
    <div className="player-info">
      <img src={data.profil}></img>
      <div className="player-text">
        <h3>{data.name}</h3>
        <p>Points: {data.points}</p>
      </div>
    </div>
  );
};

export default PlayerInfo;
