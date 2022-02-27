import React from "react";
import "./style.views.about.css";
import MainButton from "../../components/widgets/Button/MainButton";
import BgText from "../../components/widgets/BgText";
import profilePic from "../../Assets/profilePic.svg";

export default function About() {
  return (
    <div className="about-section-wrapper">
      <BgText title="About Me" bgTitle="About Me" />
      <div className="about-info-wrapper">
        <img
          src={profilePic}
          alt="ProfilePic"
          className="about-me-profilePic"
        />
        <div className="about-me-btn-para">
          <p>
            I'm Ayush Soni, a sophomore computer science undergraduate, a future
            computer science engineer who is fascinated about programming and
            passionate about exploring the latest and developing new things. An
            enthusiastic person with a touch of curiosity and hard work and
            heavily ambitious to improve knowledge. Active participant in
            hacking at hackathons and hackers at hackathons, collaborating
            within the communities, contributing to open-source projects and
            participating in open-source programs as a participant and mentor.
          </p>
          <div className="btn-wrapper">
            <a
              href="https://drive.google.com/file/d/1Qu1ccSu2KRly5qkHGO3WzeqB04CNdcGl/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <MainButton
                value="Resume"
                startIcon="fas fa-arrow-circle-down"
                className="about-me-button-resume"
              />
            </a>
            <a
              href="https://calendly.com/ayushsoni1010/"
              target="_blank"
              rel="noreferrer"
            >
              <MainButton
                value="Schedule a Meeting"
                startIcon="fas fa-arrow-circle-down"
                className="about-me-button-contact"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

