import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./plans.css";
import CustomButton from "../../components/Button/CustomButton";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Plans = () => {
  return (
    <div className="plans">
      <Sidebar idx={7} />
      <div className="content">
        <Header />
        <SectionHeader title={"Plans"} />
        <div className="plans-page">
          <div className="plan">
            <div className="top green">
              <h2>Free</h2>
              <div className="price">
                <span>$</span>0.00
              </div>
            </div>
            <ul>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Access All Text Lessons</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Access All Video Lessons</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Appear On Leaderboard</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-x-lg"></i>
                <span>Browse Content Without Ads</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-x-lg"></i>
                <span>Access All Assignments</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-x-lg"></i>
                <span>Get Daily Prizes</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-x-lg"></i>
                <span>Earn Certificate</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-x-lg"></i>
                <span>1GB Space For Hosting Files</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-x-lg"></i>
                <span>Access Badge System</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
            </ul>
            <CustomButton title={"Join"} color={"green"} path={"/plans/free"} />
          </div>
          <div className="plan">
            <div className="top blue">
              <h2>Basic</h2>
              <div className="price">
                <span>$</span>7.99
              </div>
            </div>
            <ul>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Access All Text Lessons</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Access All Video Lessons</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Appear On Leaderboard</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Browse Content Without Ads</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Access All Assignments</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Get Daily Prizes</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Earn Certificate</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-x-lg"></i>
                <span>1GB Space For Hosting Files</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-x-lg"></i>
                <span>Access Badge System</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
            </ul>
            <CustomButton title={"Join"} color={"blue"} path={"/plans/basic"} />
          </div>
          <div className="plan">
            <div className="top orange">
              <h2>Premium</h2>
              <div className="price">
                <span>$</span>19.99
              </div>
            </div>
            <ul>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Access All Text Lessons</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Access All Video Lessons</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Appear On Leaderboard</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Browse Content Without Ads</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Access All Assignments</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Get Daily Prizes</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Earn Certificate</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>1GB Space For Hosting Files</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
              <li>
                <i className="bi bi-check-lg yes"></i>
                <span>Access Badge System</span>
                <i className="bi bi-info-circle-fill help"></i>
              </li>
            </ul>
            <CustomButton
              title={"Join"}
              color={"orange"}
              path={"/plans/premium"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
