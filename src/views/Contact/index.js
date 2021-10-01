import React from "react";
import "./style.views.contactUs.css";
import Button from '../../components/widgets/Button'
import imgContact from "../../Assets/contactUs.svg";

export default function Contact() {
  return (
    <div className="contact-us">
      <h1 className="contact-us-title">Contact Me</h1>
      <p className="bg-contact">Contact Me</p>

      <div className="form-section-wrapper">
        <img
          src={imgContact}
          alt="Contact-Us-Illustration"
          className="contact-illustration"
        />

        <form className="contact-us-form" action="" method="">
          <label for="name">
            Name
            <input
              type="text"
              placeholder="Enter your name"
              className="name-input"
              id="name"
              name="name"
            />
          </label>
          <label for="email">
            Email Id
            <input
              type="text"
              placeholder="Enter your email"
              className="email-input"
              id="email-id"
              name="email-id"
            />
          </label>
          <label for="message">Message</label>
          <textarea
            name="textarea"
            id="textarea-form-wrapper"
            cols="30"
            rows="5"
          ></textarea>
          <a href="/contact" className="submit-form-button">
            <Button value="Submit" />
          </a>
        </form>
      </div>
    </div>
  );
}
