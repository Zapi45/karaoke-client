import "./index.css";

const Gameboard = (props) => {
  let currentStyle = {
    width: props.width,
  };

  return (
    <>
      <div style={currentStyle} className="gameboard">
        {props.children}
      </div>
    </>
  );
};

export default Gameboard;
