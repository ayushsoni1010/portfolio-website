import React from "react";
import { useState } from "react";
import "./style.footer.css";
import socialLinks from '../../../views/LandingPage/__social-links.json';

export default function Footer() {
    const [usefulLinks] = useState(socialLinks);
  return (
    <footer className="footer-section-wrapper">
      <p>
        Made with <i class="fas fa-heart"></i> using React{" "}
        <i class="fab fa-react"></i>
      </p>
      <div className="social-links-wrapper">
        {usefulLinks.map((data, index) => (
          <div className="social-links-list" key={index}>
            <a href={data.LinkedIn} target="_blank" rel="noreferrer">
              <button className="fab fa-linkedin" type="button"></button>
            </a>
            <a href={data.GitHub} target="_blank" rel="noreferrer">
              <button className="fab fa-github" type="button"></button>
            </a>
            <a href={data.Twitter} target="_blank" rel="noreferrer">
              <button className="fab fa-twitter" type="button"></button>
            </a>
            <a href={data.Instagram} target="_blank" rel="noreferrer">
              <button className="fab fa-instagram" type="button"></button>
            </a>
            <a href={data.Email} target="_blank" rel="noreferrer">
              <button className="fas fa-envelope" type="button"></button>
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
