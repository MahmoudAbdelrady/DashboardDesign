import "./checkbox.css";

const Checkbox = () => {
  return (
    <label>
      <input className="toggle-checkbox" type="checkbox" />
      <div className="toggle-switch">
        {/* set State */}
        <i className="bi bi-x-lg"></i>
        {/* <i className="bi bi-check2"></i> */}
      </div>
    </label>
  );
};

export default Checkbox;
