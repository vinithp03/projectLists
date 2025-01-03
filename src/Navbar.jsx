import React from 'react';
import './Navbar.css'; // Custom CSS for styling
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import TelegramIcon from '@mui/icons-material/Telegram';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-logo">
        <img src="./grass.png" alt="channelLogo" />
        <h2><span className='crypto'>Crypto</span><span className='catch'>Catch</span></h2>
      </div>


      <div className="navbar-links">
        <a href="https://youtube.com/@wecatchcrypto?si=AxUfVjvFy2D74K5z" target="_blank" rel="noopener noreferrer" className="nav-link">
          <SubscriptionsIcon />
        </a>
        <a href="https://t.me/cryptoCatchUTube" target="_blank" rel="noopener noreferrer" className="nav-link">
          <TelegramIcon />
        </a>

        <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <Brightness4RoundedIcon /> : <Brightness4OutlinedIcon />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
