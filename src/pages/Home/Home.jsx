import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./home.css";
import CustomButton from "../../components/Button/CustomButton";

const Home = () => {
  return (
    <div className="home">
      <Sidebar idx={0} />
      <div className="content">
        <Header />
        <SectionHeader title={"Dashboard"} />
        <div className="wrapper">
          <div className="welcome">
            <div className="intro">
              <div>
                <h2>Welcome</h2>
                <p>Username</p>
              </div>
              <img src="./images/welcome.png" alt="Welcome" />
            </div>
            <img src="./images/avatar.png" alt="Avatar" className="avatar" />
            <div className="body">
              <div>
                Username <span>Developer</span>
              </div>
              <div>
                80 <span>Projects</span>
              </div>
              <div>
                $100 <span>Earned</span>
              </div>
            </div>
            <CustomButton title={"Profile"} color={"blue"} path={"/profile"} />
          </div>
          <div className="quick-draft">
            <h2>Quick Draft</h2>
            <p>Write A Draft For Your Ideas</p>
            <form>
              <input type="text" placeholder="Title" />
              <textarea placeholder="Your Thoughts"></textarea>
              <input className="save" type="submit" value="Save" />
            </form>
          </div>
          <div className="targets">
            <h2>Yearly Targets</h2>
            <p>Targets of the year</p>
            <div className="trow">
              <div className="icon">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <div className="details">
                <span className="d-title">Money</span>
                <span className="d-val">$20.000</span>
                <div className="progress">
                  <span className="percentage" style={{ width: "80%" }}>
                    <span>80%</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="trow">
              <div className="icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <div className="details">
                <span className="d-title">Projects</span>
                <span className="d-val">24</span>
                <div className="progress">
                  <span className="percentage" style={{ width: "55%" }}>
                    <span>55%</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="trow">
              <div className="icon">
                <i className="bi bi-people"></i>
              </div>
              <div className="details">
                <span className="d-title">Team</span>
                <span className="d-val">1</span>
                <div className="progress">
                  <span className="percentage" style={{ width: "1%" }}>
                    <span>1%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="tickets">
            <h2>Tickets Statistics</h2>
            <p>Everything About Support Tickets</p>
            <div>
              <div className="box">
                <i className="bi bi-card-list blue"></i>
                <span>2500</span>
                Total
              </div>
              <div className="box">
                <i className="bi bi-exclamation-circle-fill orange"></i>
                <span>500</span>
                Pending
              </div>
              <div className="box">
                <i className="bi bi-check-circle green"></i>
                <span>1900</span>
                Closed
              </div>
              <div className="box">
                <i className="bi bi-x-square red"></i>
                <span>100</span>
                Deleted
              </div>
            </div>
          </div>
          <div className="latest-news">
            <h2>Latest News</h2>
            <div className="news-row">
              <img src="./images/news-01.png" alt="News1" />
              <div className="info">
                <h3>Created SASS Section</h3>
                <p>New SASS Examples & Tutorials</p>
              </div>
              <div className="moment">3 Days Ago</div>
            </div>
            <div className="news-row">
              <img src="./images/news-02.png" alt="News2" />
              <div className="info">
                <h3>Changed The Design</h3>
                <p>A Brand New Website Design</p>
              </div>
              <div className="moment">5 Days Ago</div>
            </div>
            <div className="news-row">
              <img src="./images/news-03.png" alt="News3" />
              <div className="info">
                <h3>Team Decreased</h3>
                <p>You wasted everything. You had it all</p>
              </div>
              <div className="moment">4 Months Ago</div>
            </div>
            <div className="news-row">
              <img src="./images/news-04.png" alt="News4" />
              <div className="info">
                <h3>Added Payment Gateway</h3>
                <p>Many New Payment Gateways Added</p>
              </div>
              <div className="moment">9 Days Ago</div>
            </div>
          </div>
          <div className="tasks">
            <h2>Latest Tasks</h2>
            <div className="task-row">
              <div className="info">
                <h3>Record One Video</h3>
                <p>Record Python Create Exe Project</p>
              </div>
              <i className="bi bi-trash delete"></i>
            </div>
            <div className="task-row">
              <div className="info">
                <h3>Write Article</h3>
                <p>Write Low Level vs High Level</p>
              </div>
              <i className="bi bi-trash delete"></i>
            </div>
            <div className="task-row">
              <div className="info">
                <h3>Finish Project</h3>
                <p>Publish Academy Programming Project</p>
              </div>
              <i className="bi bi-trash delete"></i>
            </div>
            <div className="task-row done">
              <div className="info">
                <h3>Attend The Meeting</h3>
                <p>Attend The Project Business</p>
              </div>
              <i className="bi bi-trash delete"></i>
            </div>
            <div className="task-row">
              <div className="info">
                <h3>Finish Lesson</h3>
                <p>Finish Teaching Flex Box</p>
              </div>
              <i className="bi bi-trash delete"></i>
            </div>
          </div>
          <div className="search-items">
            <h2>Top Search Items</h2>
            <div className="items-head">
              <div>Keyword</div>
              <div>Search Count</div>
            </div>
            <div className="items">
              <span>Programming</span>
              <span>220</span>
            </div>
            <div className="items">
              <span>JavaScript</span>
              <span>180</span>
            </div>
            <div className="items">
              <span>PHP</span>
              <span>160</span>
            </div>
            <div className="items">
              <span>Code</span>
              <span>145</span>
            </div>
            <div className="items">
              <span>Design</span>
              <span>110</span>
            </div>
            <div className="items">
              <span>Logic</span>
              <span>95</span>
            </div>
          </div>
          <div className="latest-uploads">
            <h2>Latest Uploads</h2>
            <ul>
              <li>
                <div className="file-info">
                  <img src="./images/pdf.svg" alt="PDF" />
                  <div className="user-info">
                    <span className="file-name">YouRuinedIt.pdf</span>
                    <span className="username">BSL</span>
                  </div>
                </div>
                <div className="file-size">2.9MB</div>
              </li>
              <li>
                <div className="file-info">
                  <img src="./images/avi.svg" alt="AVI" />
                  <div className="user-info">
                    <span className="file-name">Baby Blue.avi</span>
                    <span className="username">BSL</span>
                  </div>
                </div>
                <div className="file-size">4.9MB</div>
              </li>
              <li>
                <div className="file-info">
                  <img src="./images/psd.svg" alt="PSD" />
                  <div className="user-info">
                    <span className="file-name">Concept.psd</span>
                    <span className="username">Designer</span>
                  </div>
                </div>
                <div className="file-size">3.2MB</div>
              </li>
              <li>
                <div className="file-info">
                  <img src="./images/pdf.svg" alt="PDF" />
                  <div className="user-info">
                    <span className="file-name">HatedPerson.pdf</span>
                    <span className="username">Admin</span>
                  </div>
                </div>
                <div className="file-size">2.9MB</div>
              </li>
              <li>
                <div className="file-info">
                  <img src="./images/dll.svg" alt="DLL" />
                  <div className="user-info">
                    <span className="file-name">Library.dll</span>
                    <span className="username">User</span>
                  </div>
                </div>
                <div className="file-size">15.7KB</div>
              </li>
              <li>
                <div className="file-info">
                  <img src="./images/eps.svg" alt="EPS" />
                  <div className="user-info">
                    <span className="file-name">EPS_File.eps</span>
                    <span className="username">Amr Sharaf</span>
                  </div>
                </div>
                <div className="file-size">437.34KB</div>
              </li>
            </ul>
          </div>
          <div className="last-project">
            <h2>Current Project Progress</h2>
            <ul>
              <li className="done">Got The Project</li>
              <li className="done">Started The Project</li>
              <li className="done">The Project About To Finish</li>
              <li className="current">Test The Project</li>
              <li className="">Finish The Project & Get Money</li>
            </ul>
            <img
              className="launch-icon"
              src="./images/project.png"
              alt="Project"
            />
          </div>
          <div className="reminders">
            <h2>Reminders</h2>
            <ul>
              <li>
                <span className="key"></span>
                <div className="reminder-info">
                  <p className="reminder-title">Memory</p>
                  <span className="reminder-date">17/08/2022</span>
                </div>
              </li>
              <li>
                <span className="key"></span>
                <div className="reminder-info">
                  <p className="reminder-title">The Day You Lost Everything</p>
                  <span className="reminder-date">12/04/2023</span>
                </div>
              </li>
              <li>
                <span className="key"></span>
                <div className="reminder-info">
                  <p className="reminder-title">Check The Projects</p>
                  <span className="reminder-date">15/7/2023</span>
                </div>
              </li>
              <li>
                <span className="key"></span>
                <div className="reminder-info">
                  <p className="reminder-title">Website Creation</p>
                  <span className="reminder-date">17/08/2023</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="latest-post">
            <h2>Latest Posts</h2>
            <div className="top">
              <img src="./images/avatar.png" alt="Avatar" />
              <div className="info">
                <span className="username">BSL</span>
                <span className="moment">About 3 Hours Ago</span>
              </div>
            </div>
            <div className="post-content">
              Which could be worse, To live as a monster .. or to die as a good
              man ?
            </div>
            <div className="post-stats">
              <div className="box">
                <i className="bi bi-heart"></i>
                <span className="count">1.8K</span>
              </div>
              <div className="box">
                <i className="bi bi-chat"></i>
                <span className="count">500</span>
              </div>
            </div>
          </div>
          <div className="social-media">
            <h2>Social Media Stats</h2>
            <div className="box twitter">
              <i className="bi bi-twitter"></i>
              <span className="count">90K Followers</span>
              <Link to="https://www.x.com/usertwitteraccount">Follow</Link>
            </div>
            <div className="box facebook">
              <i className="bi bi-facebook"></i>
              <span className="count">2M Likes</span>
              <Link to="https://www.facebook.com/userfacebookaccount">
                Like
              </Link>
            </div>
            <div className="box youtube">
              <i className="bi bi-youtube"></i>
              <span className="count">1M Subs</span>
              <Link to="https://www.youtube.com/useryoutubechannel">
                Subscribe
              </Link>
            </div>
            <div className="box linkedin">
              <i className="bi bi-linkedin"></i>
              <span className="count">70K Followers</span>
              <Link to="https://www.linkedin.com/userlinkedinaccount">
                Follow
              </Link>
            </div>
          </div>
        </div>
        <div className="projects">
          <h2>Projects</h2>
          <div className="responsive-table">
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Finish Date</td>
                  <td>Client</td>
                  <td>Price</td>
                  <td>Team</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ministry Wikipedia</td>
                  <td>31/8/2023</td>
                  <td>Ministry</td>
                  <td>$5300</td>
                  <td>
                    <img src="./images/team-01.png" alt="Team" />
                    <img src="./images/team-02.png" alt="Team" />
                    <img src="./images/team-03.png" alt="Team" />
                    <img src="./images/team-04.png" alt="Team" />
                  </td>
                  <td>
                    <span className="label pen">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Shoreline Website</td>
                  <td>27/08/2023</td>
                  <td>NARSS</td>
                  <td>Free</td>
                  <td>
                    <img src="./images/team-01.png" alt="Team" />
                    <img src="./images/team-02.png" alt="Team" />
                  </td>
                  <td>
                    <span className="label comp">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>Arena Application</td>
                  <td>01/09/2023</td>
                  <td>Arena Company</td>
                  <td>$2600</td>
                  <td>
                    <img src="./images/team-01.png" alt="Team" />
                    <img src="./images/team-02.png" alt="Team" />
                    <img src="./images/team-03.png" alt="Team" />
                    <img src="./images/team-04.png" alt="Team" />
                  </td>
                  <td>
                    <span className="label rej">Rejected</span>
                  </td>
                </tr>
                <tr>
                  <td>Shop App</td>
                  <td>30/07/2023</td>
                  <td>Shop Company</td>
                  <td>$1500</td>
                  <td>
                    <img src="./images/team-01.png" alt="Team" />
                    <img src="./images/team-02.png" alt="Team" />
                    <img src="./images/team-03.png" alt="Team" />
                  </td>
                  <td>
                    <span className="label prog">In Progress</span>
                  </td>
                </tr>
                <tr>
                  <td>Portfolio Website</td>
                  <td>10/08/2023</td>
                  <td>Person</td>
                  <td>$600</td>
                  <td>
                    <img src="./images/team-01.png" alt="Team" />
                    <img src="./images/team-02.png" alt="Team" />
                    <img src="./images/team-03.png" alt="Team" />
                    <img src="./images/team-04.png" alt="Team" />
                    <img src="./images/team-05.png" alt="Team" />
                  </td>
                  <td>
                    <span className="label comp">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>Bouba App</td>
                  <td>25/08/2023</td>
                  <td>Bouba</td>
                  <td>$300</td>
                  <td>
                    <img src="./images/team-02.png" alt="Team" />
                    <img src="./images/team-03.png" alt="Team" />
                    <img src="./images/team-05.png" alt="Team" />
                  </td>
                  <td>
                    <span className="label pen">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
