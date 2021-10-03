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
            I'm Ayush Soni, a sophomore computer science undergraduate student,
            a future computer science engineer who is fascinated about
            programming and passionate about exploring the latest technologies
            and developing new things. An enthusiastic person with a touch of
            curiosity and hard work and heavily ambitious to improve knowledge.
            Active participant in hacking at hackathons and mentoring hackers at
            hackathons, collaborating within the communities, contributing to
            open-source projects and participating in open-source programs as a
            participant and mentor.
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
            <a href="/contact">
              <MainButton
                value="Contact"
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
