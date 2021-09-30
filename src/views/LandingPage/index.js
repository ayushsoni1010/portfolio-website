import React, { useState } from "react";
import "./style.views.landingPage.css";
import gitImage from "../../assets/hero_version_control.svg";
import socialLinks from "./__social-links.json";

export default function LandingPage() {
  const [usefulLinks] = useState(socialLinks);
  return (
    <div className="intro-section-wrapper">
      <div className="profile-content">
        <p className="greet">HELLO !</p>
        <h1 className="name">I'm Ayush Soni</h1>

        <p className="titles gradient-text">Frontend Developer & Designer</p>
        <div className="social-links-wrapper">
          {usefulLinks.map((data, index) => (
            <div className="social-links-list">
              <a
                href={data.LinkedIn}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <button className="fab fa-linkedin" type="button"></button>
              </a>
              <a
                href={data.GitHub}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <button className="fab fa-github" type="button"></button>
              </a>
              <a
                href={data.Twitter}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <button className="fab fa-twitter" type="button"></button>
              </a>
              <a
                href={data.Instagram}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <button className="fab fa-instagram" type="button"></button>
              </a>
              <a href={data.Email} target="_blank" rel="noreferrer" key={index}>
                <button className="fas fa-envelope" type="button"></button>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="git-image">
        <img src={gitImage} alt="gitImage" className="git-photo" />
      </div>
    </div>
  );
}
