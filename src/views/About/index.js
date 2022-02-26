import React from "react";
import "./style.views.about.css";
import MainButton from "../../components/widgets/Button/MainButton";
import BgText from "../../components/widgets/BgText";
import profilePic from "../../Assets/profilePic.svg";

export default function About() {
  return (
    <div className="about-section-wrapper">
      <h1 className="about-section-title ">About Me</h1>
      <BgText title="About Me" />
      <div className="about-info-wrapper">
        <div className="about-me-btn-para">
          <p>
            I'm Ayush Soni, a sophomore computer science undergraduate, a future computer science engineer who is fascinated about programming and passionate about exploring the latest technologies
            and developing new things. An enthusiastic person with a touch of curiosity and hard work and heavily ambitious to improve knowledge. Active participant in hacking at hackathons and mentoring hackers at hackathons, collaborating within the communities, contributing to open-source projects and participating in open-source programs as a participant and mentor.
          </p>
          <div className="btn-wrapper">
            <a
              href="https://drive.google.com/file/d/1g77Jk2wmLhpw-Hshr0QJBDffstWgfOeJ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <MainButton
                value="Resume"
                startIcon="fas fa-arrow-circle-down"
                className="about-me-button-resume"
              />
            </a>
            <a href="https://calendly.com/ayushsoni1010/" target="_blank" rel="noreferrer">
              <MainButton
                value="Schedule a Meeting"
                startIcon="fas fa-arrow-circle-down"
                className="about-me-button-contact"
              />
            </a>
          </div>
        </div>
        <img
          src={profilePic}
          alt="ProfilePic"
          className="about-me-profilePic"
        />
      </div>
    </div>
  );
}


/*
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/ayushsoni1010', text: 'Schedule time with me', color: '#006bff', textColor: '#ffffff', branding: true }); }</script>
*/