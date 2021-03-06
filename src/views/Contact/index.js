import React from "react";
import emailjs from "emailjs-com";
import "./style.views.contactUs.css";
import BgText from "../../components/widgets/BgText";
import imgContact from "../../Assets/contactUs.svg";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_9zkhwz8",
        e.target,
        "user_XUVi6Y9T6XwQDcIUhmykY"
      )
      .then((res) => {
        if (res.status === 200)
          alert("Thank You! Your message has been sent !");
        else alert("Error !");
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  }
  return (
    <div className="contact-us">
      <BgText title="Contact Me" bgTitle="Contact Me" />
      <div className="form-section-wrapper">
        <img
          src={imgContact}
          alt="Contact-Us-Illustration"
          className="contact-illustration"
        />

        <form className="contact-us-form" onSubmit={sendEmail}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              placeholder="Enter your name"
              className="name-input"
              name="name"
              required
            />
          </label>
          <label htmlFor="email">
            Email Id
            <input
              type="text"
              placeholder="Enter your email"
              className="email-input"
              name="email"
              required
            />
          </label>
          <label htmlFor="name">Message</label>
          <textarea name="message" cols="30" rows="5" email required></textarea>

          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
