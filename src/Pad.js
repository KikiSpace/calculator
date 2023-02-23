import "./Pad.css";
const Pad = (props) => {
  return (
    <div className={`pad pad-${props.classes}`} onClick={props.onClick}>
      <div className="text">{props.children}</div>
    </div>
  );
};

export default Pad;
