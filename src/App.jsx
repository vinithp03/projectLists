import './App.css';
import { useState } from 'react';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import { Allprojects } from "./Allprojects"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <h1 className="font-effect">All Airdrop Projects (Crypto Catch YT)</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <Brightness4RoundedIcon className='icon' /> : <Brightness4OutlinedIcon className='icon' />}
      </button>
      <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
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
                    <div className="table-cell project-item grass">{item.name}</div>
                    <div className="table-cell">
                      <a href={item.joinLink} target="_blank" rel="noopener noreferrer">
                        <button className="join-btn">Join Here</button>
                      </a>
                      {/* Dynamically display the referral code */}
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
        <p style={{ color: "red" }}>Note: There might be slight change in info about projects </p>
      </div>
    </>
  );
}

export default App;
