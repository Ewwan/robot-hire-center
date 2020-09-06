import React from "react";

import './welcome-icon.styles.css';
import Robot from './../../../media/images/robot_logo.png';

const WelcomeIcon = () => (
  <div className="header-welcome-icon">
   <img className="header_robot-icon" alt="robot icon" src={Robot} />
  </div>
 );

export default WelcomeIcon;
