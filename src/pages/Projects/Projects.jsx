import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./projects.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Projects = () => {
  return (
    <div className="pjs">
      <Sidebar idx={3} />
      <div className="content">
        <Header />
        <SectionHeader title={"Projects"} />
        <div className="projects-page">
          <div className="project">
            <span className="date">15/07/2023</span>
            <h4>Elzero Dashboard</h4>
            <p>Elzero Dashboard Project Design, Programming And Hosting</p>
            <div className="team">
              <Link to="/user/1">
                <img src="./images/team-01.png" alt="Team" />
              </Link>
              <Link to="/user/2">
                <img src="./images/team-02.png" alt="Team" />
              </Link>
              <Link to="/user/3">
                <img src="./images/team-03.png" alt="Team" />
              </Link>
              <Link to="/user/4">
                <img src="./images/team-04.png" alt="Team" />
              </Link>
              <Link to="/user/5">
                <img src="./images/team-05.png" alt="Team" />
              </Link>
            </div>
            <div className="techs">
              <span>Programming</span>
              <span>Design</span>
              <span>Marketing</span>
              <span>Hosting</span>
            </div>
            <div className="info">
              <div className="prog">
                <span style={{ width: `50%` }}></span>
              </div>
              <div className="money">
                <i className="bi bi-currency-dollar"></i>
                2500
              </div>
            </div>
          </div>
          <div className="project">
            <span className="date">18/08/2023</span>
            <h4>Chatting Application</h4>
            <p>Chatting Application Project Design</p>
            <div className="team">
              <Link to="/user/1">
                <img src="./images/team-01.png" alt="Team" />
              </Link>
              <Link to="/user/2">
                <img src="./images/team-02.png" alt="Team" />
              </Link>
              <Link to="/user/5">
                <img src="./images/team-05.png" alt="Team" />
              </Link>
            </div>
            <div className="techs">
              <span>Design</span>
            </div>
            <div className="info">
              <div className="prog">
                <span style={{ width: `30%` }}></span>
              </div>
              <div className="money">
                <i className="bi bi-currency-dollar"></i>
                1200
              </div>
            </div>
          </div>
          <div className="project">
            <span className="date">01/08/2023</span>
            <h4>Dashboard Website</h4>
            <p>Dashboard Website Project and Design</p>
            <div className="team">
              <Link to="/user/1">
                <img src="./images/team-01.png" alt="Team" />
              </Link>
              <Link to="/user/2">
                <img src="./images/team-02.png" alt="Team" />
              </Link>
              <Link to="/user/3">
                <img src="./images/team-03.png" alt="Team" />
              </Link>
              <Link to="/user/5">
                <img src="./images/team-05.png" alt="Team" />
              </Link>
            </div>
            <div className="techs">
              <span>ReactJs</span>
              <span>Design</span>
              <span>Programming</span>
            </div>
            <div className="info">
              <div className="prog">
                <span style={{ width: `80%` }}></span>
              </div>
              <div className="money">
                <i className="bi bi-currency-dollar"></i>
                3000
              </div>
            </div>
          </div>
          <div className="project">
            <span className="date">12/08/2023</span>
            <h4>Blog Application</h4>
            <p>Blog Website Application</p>
            <div className="team">
              <Link to="/user/4">
                <img src="./images/team-04.png" alt="Team" />
              </Link>
              <Link to="/user/3">
                <img src="./images/team-03.png" alt="Team" />
              </Link>
              <Link to="/user/2">
                <img src="./images/team-02.png" alt="Team" />
              </Link>
              <Link to="/user/5">
                <img src="./images/team-05.png" alt="Team" />
              </Link>
            </div>
            <div className="techs">
              <span>ReactJs</span>
              <span>ExpressJs</span>
              <span>Programming</span>
              <span>Design</span>
            </div>
            <div className="info">
              <div className="prog">
                <span style={{ width: `100%` }}></span>
              </div>
              <div className="money">
                <i className="bi bi-currency-dollar"></i>
                500
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
