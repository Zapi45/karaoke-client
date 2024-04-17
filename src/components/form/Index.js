import { Form } from "react-router-dom";
import "./index.css";

const FormTemplate = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-template">{props.children}</div>
      <input className="btn" type="submit"></input>
    </form>
  );
};
export default FormTemplate;
