import React from "react";

import WelcomeIcon from './WelcomeIcon/WelcomeIconComponent';
import WelcomeTitle from './WelcomeTitle/WelcomeTitleComponent';

import './header.styles.css';

const Header = () => (
  <div className="header-component">
    <div className="welcome-icon">
      <WelcomeIcon />
    </div>
    <div className="welcome-title">
      <WelcomeTitle />
    </div>
 </div>
 );

export default Header;
