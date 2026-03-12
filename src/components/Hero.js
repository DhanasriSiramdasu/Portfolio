import React, { Component } from "react";
import profileImg from "../assets/profile.jpg";
import linkedinIcon from "../assets/icon1.png";
import githubIcon from "../assets/icon22.png";
import emailIcon from "../assets/icon3.jpg";

export class Hero extends Component {
  render() {
    return (
      <>
        <div className="about-container" id="home">
          <div className="content box">
            <h1 className="about-title">Hi, I'm Dhanasri Siramdasu</h1>
            <h3 className="about-subtitle">Software Developer | ML Enthusiast</h3>
            <p className="about-text">Crafting intelligent software and data-driven solutions that create meaningful impact.</p>
            <div className="hero-buttons">
              <a href="#projects" className="project-btn">View My Projects</a>
              <a href="/Dhanasri_Siramdasu_Resume.pdf" download className="resume-btn">Download Resume</a>
            </div>
            <div className="images">
              <a href="https://www.linkedin.com/in/dhanasrisiramdasu/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="linkedinicon" className="icons" />
              </a>
              <a href="https://github.com/DhanasriSiramdasu" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="githubicon" className="icons" />
              </a>
              <a
                href="mailto:dhanasrisiramdasu@gmail.com?subject=Portfolio Contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emailIcon} alt="Email" className="icons" />
              </a>
            </div>
          </div>
          <div className="about-img box">
            <img src={profileImg} alt="Profile" className="profile-img" />
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
