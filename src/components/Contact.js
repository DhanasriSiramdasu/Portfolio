import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {

  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_z7d30ha",
      "template_o1eyiic",
      form.current,
      "CmvkzIJeAS02DvT8q"
    )
      .then(() => {
        setStatus("success");
        e.target.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="contact-section ">

      {/* Hero text */}
      <div className="contact-hero" id="contact">
        <h2>Contact me!!</h2>
        <p>Let's work together.</p>
      </div>

      <div className="contact-container">

        {/* Left side info */}
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            Interested in internships or collaboration? <br />
            Feel free to reach out.
          </p>

          <p className="email">
            📧 <a href="mailto:siramdasudhanasri@gmail.com">siramdasudhanasri@gmail.com</a>
          </p>
        </div>

        {/* Contact form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

          {status === "success" && (
            <p className="success-msg">✔ Message Sent Successfully!</p>
          )}

          {status === "error" && (
            <p className="error-msg">❌ Failed to send message</p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;