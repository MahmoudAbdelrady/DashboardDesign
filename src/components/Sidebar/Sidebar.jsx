import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ idx }) => {
  return (
    <div className="sidebar">
      <h3>Site Name</h3>
      <ul className="links">
        <li>
          <Link to="/" className={`${!idx ? "active" : ""}`}>
            <i className="bi bi-pie-chart-fill"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className={`${idx === 1 ? "active" : ""}`}>
            <i className="bi bi-gear-fill"></i>
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/profile" className={`${idx === 2 ? "active" : ""}`}>
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/projects" className={`${idx === 3 ? "active" : ""}`}>
            <i className="bi bi-diagram-3-fill"></i>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/courses" className={`${idx === 4 ? "active" : ""}`}>
            <i className="bi bi-mortarboard-fill"></i>
            <span>Courses</span>
          </Link>
        </li>
        <li>
          <Link to="/friends" className={`${idx === 5 ? "active" : ""}`}>
            <i className="bi bi-people-fill"></i>
            <span>Friends</span>
          </Link>
        </li>
        <li>
          <Link to="/files" className={`${idx === 6 ? "active" : ""}`}>
            <i className="bi bi-file-earmark"></i>
            <span>Files</span>
          </Link>
        </li>
        <li>
          <Link to="/plans" className={`${idx === 7 ? "active" : ""}`}>
            <i className="bi bi-hdd-rack"></i>
            <span>Plans</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
