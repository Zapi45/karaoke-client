import { useState } from "react";
import "./index.css";

const Button = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(props.color);
  let currentStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <>
      <input
        className="btn"
        style={currentStyle}
        type="button"
        onClick={props.functions}
        onMouseEnter={() => setBackgroundColor("#f8f7f4")}
        onMouseLeave={() => setBackgroundColor(props.color)}
        value={props.text}
      ></input>
    </>
  );
};

export default Button;
