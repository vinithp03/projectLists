import './App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import { Allprojects } from "./Allprojects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
        <h1 className="font-effect" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '25px', color: isDarkMode ? 'rgb(140, 255, 0)' : 'white' }}>Airdrop Directory</h1>

        {Allprojects.map((project, index) => (
          <section key={index}>
            <h3>{project.title}</h3>
            <div className="table-container">
              <div className="table-header">
                <div className="table-cell">Project</div>
                <div className="table-cell">Join Here</div>
                <div className="table-cell">Funding</div>
                <div className="table-cell">Backed By</div>
                <div className="table-cell">Expected TGE</div>
              </div>
              <div className="table-body">
                {project.projects.map((item, idx) => (
                  <div key={idx} className="table-row">
                    <div className="table-cell project-item">
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="project-logo"
                      />
                      <span className='table-cell project-item grass'>{item.name}</span>
                    </div>
                    <div className="table-cell">
                      <a href={item.joinLink} target="_blank" rel="noopener noreferrer">
                        <button className="join-btn">Join Here</button>
                      </a>
                      {item.refCode !== "N/A" && (
                        <div className="ref-code">Ref Code: {item.refCode}</div>
                      )}
                    </div>
                    <div className="table-cell project-item funding">{item.funding}</div>
                    <div className="table-cell project-item backers">{item.backers}</div>
                    <div className="table-cell project-item tge">{item.expectedTGE}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Note and Terminology Section */}
        <footer>
          <div className="footer-content">
            <div className="note">
              <p><strong>Note:</strong> Some information may vary slightly compared to other platforms.</p>
            </div>
            <div className="terminologies">
              <p><strong>Terminologies:</strong></p>
              <ul>
                <li><strong>TBA</strong> - To be announced</li>
                <li><strong>NOA</strong> - Not officially announced</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
