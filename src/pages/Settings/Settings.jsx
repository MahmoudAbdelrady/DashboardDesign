import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Checkbox from "../../components/Checkbox/Checkbox";
import "./settings.css";
import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CustomButton from "../../components/Button/CustomButton";

const Settings = () => {
  return (
    <div className="settings">
      <Sidebar idx={1} />
      <div className="content">
        <Header />
        <SectionHeader title={"Settings"} />
        <div className="settings-page">
          <div className="site-control box">
            <h2>Site Control</h2>
            <p>Control The Website If There Is Maintenance</p>
            <div className="option">
              <div className="info">
                <span>Website Control</span>
                <p>Open/Close Website and Type The Reason</p>
              </div>
              <div>
                <Checkbox />
              </div>
            </div>
            <textarea
              className="close-message"
              placeholder="Close Message Content"
            ></textarea>
          </div>
          <div className="general-info box">
            <h2>General Info</h2>
            <p>General Information About Your Account</p>
            <div className="info">
              <label htmlFor="fn">First Name</label>
              <input type="text" id="fn" placeholder="First Name" />
            </div>
            <div className="info">
              <label htmlFor="ln">Last Name</label>
              <input type="text" id="fn" placeholder="Last Name" />
            </div>
            <div className="info">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value="test@testing.com"
                disabled
              />
              <Link to="/change-email">Change</Link>
            </div>
          </div>
          <div className="security-info box">
            <h2>Security Info</h2>
            <p>Security Information About Your Account</p>
            <div className="sec-box">
              <div className="sinfo">
                <span>Password</span>
                <p>Last Change On 16/07/2023</p>
              </div>
              <CustomButton
                title={"Change"}
                color={"blue"}
                path={"/change-password"}
              />
            </div>
            <div className="sec-box">
              <div className="sinfo">
                <span>Two-Factor Authentication</span>
                <p>Enable/Disable The Feature</p>
              </div>
              <Checkbox />
            </div>
            <div className="sec-box">
              <div className="sinfo">
                <span>Devices</span>
                <p>Check The Logged-In Devices List</p>
              </div>
              <Link className="devices-link" to="/change-password">
                Devices
              </Link>
            </div>
          </div>
          <div className="social-media box">
            <h2>Social Info</h2>
            <p>Social Media Informaion</p>
            <div className="sm-box">
              <i className="bi bi-twitter"></i>
              <input type="text" placeholder="Twitter Username" />
            </div>
            <div className="sm-box">
              <i className="bi bi-facebook"></i>
              <input type="text" placeholder="Facebook Username" />
            </div>
            <div className="sm-box">
              <i className="bi bi-youtube"></i>
              <input type="text" placeholder="Youtube Username" />
            </div>
            <div className="sm-box">
              <i className="bi bi-linkedin"></i>
              <input type="text" placeholder="LinkedIn Username" />
            </div>
          </div>
          <div className="widgets-control box">
            <h2>Widgets Control</h2>
            <p>Show/Hide Widgets</p>
            <div className="control">
              <input type="checkbox" id="qd" />
              <label htmlFor="qd">
                Quick Draft<i className="bi bi-check2"></i>
              </label>
            </div>
            <div className="control">
              <input type="checkbox" id="yt" />
              <label htmlFor="yt">
                Yearly Targets<i className="bi bi-check2"></i>
              </label>
            </div>
            <div className="control">
              <input type="checkbox" id="ts" />
              <label htmlFor="ts">
                Tickets Statistics<i className="bi bi-check2"></i>
              </label>
            </div>
            <div className="control">
              <input type="checkbox" id="ln" />
              <label htmlFor="ln">
                Latest News<i className="bi bi-check2"></i>
              </label>
            </div>
            <div className="control">
              <input type="checkbox" id="lt" />
              <label htmlFor="lt">
                Latest Tasks<i className="bi bi-check2"></i>
              </label>
            </div>
            <div className="control">
              <input type="checkbox" id="tsi" />
              <label htmlFor="tsi">
                Top Search Items<i className="bi bi-check2"></i>
              </label>
            </div>
          </div>
          <div className="backup-control box">
            <h2>Backup Manager</h2>
            <p>Control Backup Time And Location</p>
            <div className="date">
              <input type="radio" name="time" id="daily" />
              <label htmlFor="daily">Daily</label>
            </div>
            <div className="date">
              <input type="radio" name="time" id="weekly" />
              <label htmlFor="weekly">Weekly</label>
            </div>
            <div className="date">
              <input type="radio" name="time" id="monthly" />
              <label htmlFor="monthly">Monthly</label>
            </div>
            <div className="servers">
              <input type="radio" name="servers" id="server-one" />
              <div className="server">
                <label htmlFor="server-one">
                  <i className="bi bi-hdd"></i>
                  Megaman
                </label>
              </div>
              <input type="radio" name="servers" id="server-two" />
              <div className="server">
                <label htmlFor="server-two">
                  <i className="bi bi-hdd"></i>
                  Zero
                </label>
              </div>
              <input type="radio" name="servers" id="server-three" />
              <div className="server">
                <label htmlFor="server-three">
                  <i className="bi bi-hdd"></i>
                  Sigma
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
