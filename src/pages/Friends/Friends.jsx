import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./friends.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Friends = () => {
  return (
    <div className="friends">
      <Sidebar idx={5} />
      <div className="content">
        <Header />
        <SectionHeader title={"Friends"} />
        <div className="friends-page">
          <div className="friend">
            <div className="contact">
              <i className="bi bi-telephone-fill"></i>
              <i className="bi bi-envelope"></i>
            </div>
            <div className="friend-info">
              <img src="./images/friend-01.jpg" alt="Friend" />
              <h4>Friend Name</h4>
              <p>JavaScript Developer</p>
            </div>
            <div className="icons">
              <div className="icon">
                <i className="bi bi-emoji-smile"></i>
                <span>99 Friend</span>
              </div>
              <div className="icon">
                <i className="bi bi-code-slash"></i>
                <span>15 Project</span>
              </div>
              <div className="icon">
                <i className="bi bi-newspaper"></i>
                <span>25 Articles</span>
              </div>
              <span className="rank">VIP</span>
            </div>
            <div className="info">
              <span className="join-date">Joined 10/08/2023</span>
              <div className="profile-controls">
                <Link to="/user/1">Profile</Link>
                <span className="remove">Remove</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
