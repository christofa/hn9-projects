import React, { useState } from "react";
import "../Contact.css";

export default function Contact() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitForm(e) {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      setValid(true)
    }
    setSubmitted((prevState) => !prevState);
  }


  return (
    <div className="wrapper">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>

      <form onSubmit={submitForm}>
        <div className="name-section">
          <label className="first-name">
            First Name <br />
            <input
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
              id="first_name"
            />
            {submitted &&  !formData.firstName? <span>This is a hint text to help user.</span> : null}
          </label>
          
          <label className="last-name">
            Last Name <br />
            <input
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
              id="last_name"
            />
            {submitted &&  !formData.lastName? <span>This is a hint text to help user.</span>: null}
          </label>
          
        </div>

        <div className="text-section">
          <label className="email">
            Email <br />
            <input
              type="text"
              placeholder="yourname@email.com"
              value={formData.email}
              onChange={handleChange}
              name="email"
              id="email"
            />
            {submitted &&  !formData.email? <span>This is a hint text to help user.</span> : null}
          </label>
          
          
          <label className="message">
            Message <br />
            <textarea
              placeholder="Send me a message and I'll reply you as soon as possible..."
              value={formData.message}
              name="message"
              id="message"
              className={submitted &&  !formData.message? "red-border-error":"message-default"}
            ></textarea>
            {submitted &&  !formData.message? <span className="message-error">Please enter a message</span> : null}
          </label>
          
        </div>

        <div className="contact-footer">
          <input type="checkbox" />
          <p>
            You agree to providing your data to Christopher who may contact you.
          </p>
        </div>

        <button id="btn__submit">send message</button>
      </form>
    </div>
  );
}
