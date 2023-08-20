import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <i className="bi bi-search"></i>
        <input type="search" placeholder="Type a Keyword" />
      </div>
      <div className="icons">
        <span className="notifications">
          <i className="bi bi-bell"></i>
        </span>
        <img src="./images/avatar.png" alt="Avatar" />
      </div>
    </div>
  );
};

export default Header;
