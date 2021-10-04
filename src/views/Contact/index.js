import React from "react";
import emailjs from "emailjs-com";
import "./style.views.contactUs.css";
import MainButton from "../../components/widgets/Button/MainButton";
import BgText from '../../components/widgets/BgText';
import imgContact from "../../Assets/contactUs.svg";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.React_App_Contact_Form_Service_Id,
        process.env.React_App_Contact_Form_Template_Id,
        e.target,
        process.env.React_App_Contact_Form_User_Id
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact-us">
      <h1 className="contact-us-title">Contact Me</h1>
      <BgText title="Contact Me" />
      <div className="form-section-wrapper">
        <img
          src={imgContact}
          alt="Contact-Us-Illustration"
          className="contact-illustration"
        />

        <form className="contact-us-form" action="" method="" onSubmit={sendEmail}>
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
            <MainButton value="Submit" />
          </a>
        </form>
      </div>
    </div>
  );
}
