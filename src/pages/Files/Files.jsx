import Header from "../../components/Header/Header";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./files.css";

const Files = () => {
  return (
    <div className="files">
      <Sidebar idx={6} />
      <div className="content">
        <Header />
        <SectionHeader title={"Files"} />
        <div className="files-page">
          <div className="files-stats">
            <h2>Files Statistics</h2>
            <div className="file">
              <i className="bi bi-filetype-pdf pdf"></i>
              <div className="info">
                <span className="type">PDF Files</span>
                <span className="count">130</span>
              </div>
              <div className="size">6.5GB</div>
            </div>
            <div className="file">
              <i className="bi bi-file-earmark-image img"></i>
              <div className="info">
                <span className="type">Images</span>
                <span className="count">115</span>
              </div>
              <div className="size">3.5GB</div>
            </div>
            <div className="file">
              <i className="bi bi-file-earmark-word word"></i>
              <div className="info">
                <span className="type">Word Files</span>
                <span className="count">110</span>
              </div>
              <div className="size">3.2GB</div>
            </div>
            <div className="file">
              <i className="bi bi-filetype-csv csv"></i>
              <div className="info">
                <span className="type">CSV Files</span>
                <span className="count">99</span>
              </div>
              <div className="size">2.9GB</div>
            </div>
            <label htmlFor="upf" className="upload-btn">
              <i className="bi bi-upload"></i>
              Upload
            </label>
            <input style={{ display: "none" }} type="file" id="upf" />
          </div>
          <div className="files-content">
            <div className="file-c">
              <i className="bi bi-download"></i>
              <div className="icon">
                <img src="./images/pdf.svg" alt="PDF" />
              </div>
              <div className="filename">my-file.pdf</div>
              <p>Username</p>
              <div className="info">
                <span className="date">14/08/2023</span>
                <span className="size">5.5MB</span>
              </div>
            </div>
            <div className="file-c">
              <i className="bi bi-download"></i>
              <div className="icon">
                <img src="./images/psd.svg" alt="PSD" />
              </div>
              <div className="filename">design.psd</div>
              <p>Username</p>
              <div className="info">
                <span className="date">15/08/2023</span>
                <span className="size">6.3MB</span>
              </div>
            </div>
            <div className="file-c">
              <i className="bi bi-download"></i>
              <div className="icon">
                <img src="./images/png.svg" alt="PNG" />
              </div>
              <div className="filename">image.png</div>
              <p>Username</p>
              <div className="info">
                <span className="date">03/08/2023</span>
                <span className="size">21.5KB</span>
              </div>
            </div>
            <div className="file-c">
              <i className="bi bi-download"></i>
              <div className="icon">
                <img src="./images/sql.svg" alt="SQL" />
              </div>
              <div className="filename">database.sql</div>
              <p>Username</p>
              <div className="info">
                <span className="date">19/08/2023</span>
                <span className="size">1.1MB</span>
              </div>
            </div>
            <div className="file-c">
              <i className="bi bi-download"></i>
              <div className="icon">
                <img src="./images/zip.svg" alt="ZIP" />
              </div>
              <div className="filename">assignment.zip</div>
              <p>Username</p>
              <div className="info">
                <span className="date">10/08/2023</span>
                <span className="size">17.7MB</span>
              </div>
            </div>
            <div className="file-c">
              <i className="bi bi-download"></i>
              <div className="icon">
                <img src="./images/dll.svg" alt="DLL" />
              </div>
              <div className="filename">package.dll</div>
              <p>Username</p>
              <div className="info">
                <span className="date">18/08/2023</span>
                <span className="size">2.4KB</span>
              </div>
            </div>
            <div className="file-c">
              <i className="bi bi-download"></i>
              <div className="icon">
                <img src="./images/txt.svg" alt="TXT" />
              </div>
              <div className="filename">notes.txt</div>
              <p>Username</p>
              <div className="info">
                <span className="date">19/08/2023</span>
                <span className="size">1.1KB</span>
              </div>
            </div>
            <div className="file-c">
              <i className="bi bi-download"></i>
              <div className="icon">
                <img src="./images/avi.svg" alt="AVI" />
              </div>
              <div className="filename">video.avi</div>
              <p>Username</p>
              <div className="info">
                <span className="date">14/08/2023</span>
                <span className="size">10.6MB</span>
              </div>
            </div>
            <div className="file-c">
              <i className="bi bi-download"></i>
              <div className="icon">
                <img src="./images/eps.svg" alt="EPS" />
              </div>
              <div className="filename">eps-file.eps</div>
              <p>Username</p>
              <div className="info">
                <span className="date">12/08/2023</span>
                <span className="size">50.2KB</span>
              </div>
            </div>
            <div className="file-c">
              <i className="bi bi-download"></i>
              <div className="icon">
                <img src="./images/pdf.svg" alt="PDF" />
              </div>
              <div className="filename">IamAFuckUp.pdf</div>
              <p>Username</p>
              <div className="info">
                <span className="date">12/04/2023</span>
                <span className="size">1.0GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
