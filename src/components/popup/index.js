import "./index.css";

const Popup = (props) => {
  return (
    <>
      <div className="popup-screen">
        <div className="popup">{props.children}</div>
      </div>
    </>
  );
};

export default Popup;
