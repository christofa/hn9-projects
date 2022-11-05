import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>

      <form>
        <label>First Name
        <input type="text" placeholder="Enter your first name"/>
        </label>
        <label>Last Name
        <input type="text" placeholder="Enter your last name"/>
        </label>
        <label>Email
        <input type="text" placeholder="yourname@email.com"/>
        </label>
        <label>Message 
          <textarea 
          placeholder="Send me a message and I'll reply you as soon as possible...">
          </textarea>
        </label>
        <div>
          <input type="checkbox"/>
          <p>You agree to providing your data to Christopher who may contact you.</p>
          
        </div>
      </form>
    </div>
  );
}
