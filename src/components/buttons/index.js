import "./index.css";

const Button = (props) => {
  let currentStyle = {
    backgroundColor: props.color,
  };

  return (
    <>
      <input
        className="btn"
        style={currentStyle}
        type="button"
        onClick={props.functions}
        value={props.text}
      ></input>
    </>
  );
};

export default Button;
