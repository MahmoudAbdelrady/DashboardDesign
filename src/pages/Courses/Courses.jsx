import Header from "../../components/Header/Header";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./courses.css";

const Courses = () => {
  return (
    <div className="courses">
      <Sidebar idx={4} />
      <div className="content">
        <Header />
        <SectionHeader title={"Courses"} />
        <div className="courses-page">
          <div className="course">
            <img className="cover" src="./images/course-01.jpg" alt="Course" />
            <img className="instructor" src="./images/team-01.png" alt="Team" />
            <div className="course-info">
              <h4>Mastering Web Design</h4>
              <p className="description">
                Master The Art Of Web Design And Mocking, Prototyping And
                Creating Web Design Architecture
              </p>
            </div>
            <div className="info">
              <span className="title">Course Info</span>
              <span className="stats">
                <i className="bi bi-person-circle"></i>
                950
              </span>
              <span className="stats">
                <i className="bi bi-currency-dollar"></i>
                165
              </span>
            </div>
          </div>
          <div className="course">
            <img className="cover" src="./images/course-02.jpg" alt="Course" />
            <img className="instructor" src="./images/team-02.png" alt="Team" />
            <div className="course-info">
              <h4>Data Structure and Algorithms</h4>
              <p className="description">
                Master The Art Of Data Structure And Famous Algorithms Like
                Sorting, Dividing and Conquering
              </p>
            </div>
            <div className="info">
              <span className="title">Course Info</span>
              <span className="stats">
                <i className="bi bi-person-circle"></i>
                1150
              </span>
              <span className="stats">
                <i className="bi bi-currency-dollar"></i>
                210
              </span>
            </div>
          </div>
          <div className="course">
            <img className="cover" src="./images/course-03.jpg" alt="Course" />
            <img className="instructor" src="./images/team-03.png" alt="Team" />
            <div className="course-info">
              <h4>Responsive Web Design</h4>
              <p className="description">
                Mastering Responsive Web Design and Media Queries and Know
                Everything About Breakpoints
              </p>
            </div>
            <div className="info">
              <span className="title">Course Info</span>
              <span className="stats">
                <i className="bi bi-person-circle"></i>
                650
              </span>
              <span className="stats">
                <i className="bi bi-currency-dollar"></i>
                90
              </span>
            </div>
          </div>
          <div className="course">
            <img className="cover" src="./images/course-04.jpg" alt="Course" />
            <img className="instructor" src="./images/team-04.png" alt="Team" />
            <div className="course-info">
              <h4>Mastering Python</h4>
              <p className="description">
                Mastering Python To Prepare For Data Science and AI and
                Automating Things In Your Life
              </p>
            </div>
            <div className="info">
              <span className="title">Course Info</span>
              <span className="stats">
                <i className="bi bi-person-circle"></i>
                950
              </span>
              <span className="stats">
                <i className="bi bi-currency-dollar"></i>
                250
              </span>
            </div>
          </div>
          <div className="course">
            <img className="cover" src="./images/course-05.jpg" alt="Course" />
            <img className="instructor" src="./images/team-01.png" alt="Team" />
            <div className="course-info">
              <h4>Node Js Examples</h4>
              <p className="description">
                NodeJs Tutorials and Examples And Practice On Web Application
                and Connecting With Databases
              </p>
            </div>
            <div className="info">
              <span className="title">Course Info</span>
              <span className="stats">
                <i className="bi bi-person-circle"></i>
                850
              </span>
              <span className="stats">
                <i className="bi bi-currency-dollar"></i>
                150
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
