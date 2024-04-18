import "./index.css";

const TextInput = (props) => {
  return (
    <div className="input-div">
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        type="text"
        name={props.id}
        required={props.required}
      />
    </div>
  );
};

export default TextInput;
