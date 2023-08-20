import { Link } from "react-router-dom";
import "./custom-button.css";

const CustomButton = ({ title, color, path }) => {
  return (
    <Link className={`${color} cb`} to={`${path}`}>
      {title}
    </Link>
  );
};

export default CustomButton;
