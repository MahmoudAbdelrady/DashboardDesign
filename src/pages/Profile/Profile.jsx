import Checkbox from "../../components/Checkbox/Checkbox";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar idx={2} />
      <div className="content">
        <Header />
        <SectionHeader title={"Profile"} />
        <div className="profile-page">
          <div className="overview">
            <div className="avatar-box">
              <img src="./images/avatar.png" alt="Avatar" />
              <h3>Username</h3>
              <p className="lvl-num">Level 20</p>
              <div className="level">
                <span style={{ width: `70%` }}></span>
              </div>
              <div className="rating">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="ratings-count">450 Ratings</p>
            </div>
            <div className="info-box">
              <div className="i-row">
                <h4>General Information</h4>
                <div className="i-box">
                  <span>Full Name</span>
                  <span>User Fullname</span>
                </div>
                <div className="i-box">
                  <span>Gender:</span>
                  <span>Male</span>
                </div>
                <div className="i-box">
                  <span>Country:</span>
                  <span>Egypt</span>
                </div>
                <div className="i-box">
                  <Checkbox />
                </div>
              </div>
              <div className="i-row">
                <h4>Personal Information</h4>
                <div className="i-box">
                  <span>Email:</span>
                  <span>test@testing.com</span>
                </div>
                <div className="i-box">
                  <span>Phone:</span>
                  <span>01123456789</span>
                </div>
                <div className="i-box">
                  <span>Date Of Birth:</span>
                  <span>01/01/2002</span>
                </div>
                <div className="i-box">
                  <Checkbox />
                </div>
              </div>
              <div className="i-row">
                <h4>Job Information</h4>
                <div className="i-box">
                  <span>Title:</span>
                  <span>Full Stack Developer</span>
                </div>
                <div className="i-box">
                  <span>Programming Language:</span>
                  <span>Python</span>
                </div>
                <div className="i-box">
                  <span>Years Of Experience:</span>
                  <span>3</span>
                </div>
                <div className="i-box">
                  <Checkbox />
                </div>
              </div>
              <div className="i-row">
                <h4>Billing Information</h4>
                <div className="i-box">
                  <span>Payment Method:</span>
                  <span>Paypal</span>
                </div>
                <div className="i-box">
                  <span>Email:</span>
                  <span>email@website.com</span>
                </div>
                <div className="i-box">
                  <span>Subscription:</span>
                  <span>Monthly</span>
                </div>
                <div className="i-box">
                  <Checkbox />
                </div>
              </div>
            </div>
          </div>
          <div className="other-data">
            <div className="skills-card od-box">
              <h2>My Skills</h2>
              <p>Complete Skills List</p>
              <ul>
                <li>
                  <span>HTML</span>
                  <span>PugJs</span>
                  <span>GulpJs</span>
                </li>
                <li>
                  <span>CSS</span>
                  <span>SASS</span>
                  <span>Stylus</span>
                </li>
                <li>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                </li>
                <li>
                  <span>ReactJs</span>
                  <span>ExpressJs</span>
                </li>
                <li>
                  <span>Jest</span>
                  <span>Jasmine</span>
                </li>
                <li>
                  <span>NodeJs</span>
                  <span>Flask</span>
                </li>
                <li>
                  <span>Python</span>
                  <span>Django</span>
                </li>
              </ul>
            </div>
            <div className="activities od-box">
              <h2>Latest Activities</h2>
              <p>Latest Activities Done By The User</p>
              <div className="activity">
                <img src="./images/activity-01.png" alt="Activity" />
                <div className="info">
                  <span className="info-title">Store</span>
                  <span className="info-desc">
                    Bought The Mastering Python Course
                  </span>
                </div>
                <div className="date">
                  <span className="info-title">06:10PM</span>
                  <span className="info-desc">Yesterday</span>
                </div>
              </div>
              <div className="activity">
                <img src="./images/activity-02.png" alt="Activity" />
                <div className="info">
                  <span className="info-title">Badges</span>
                  <span className="info-desc">
                    Unlocked The 10 Skills Badge
                  </span>
                </div>
                <div className="date">
                  <span className="info-title">06:05PM</span>
                  <span className="info-desc">Yesterday</span>
                </div>
              </div>
              <div className="activity">
                <img src="./images/activity-03.png" alt="Activity" />
                <div className="info">
                  <span className="info-title">Fucked Up</span>
                  <span className="info-desc">
                    I fucked up and lost everything
                  </span>
                </div>
                <div className="date">
                  <span className="info-title">03:00PM</span>
                  <span className="info-desc">12/04/2023</span>
                </div>
              </div>
              <div className="activity">
                <img src="./images/activity-01.png" alt="Activity" />
                <div className="info">
                  <span className="info-title">Store</span>
                  <span className="info-desc">
                    Bought The TypeScript Course
                  </span>
                </div>
                <div className="date">
                  <span className="info-title">12:05AM</span>
                  <span className="info-desc">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
