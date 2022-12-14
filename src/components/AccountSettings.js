import React from "react";
import "../App2.css";

export default function App6() {
  return (
    <div className="container">
      <div className="side-bar">

      </div>
      <div className="wrapper">
        <div className="Navbar"></div>
        <h1>Settings</h1>
        <div className="nav-section">
          <div>
            <h2>Account Settings</h2>

            <div className="nav-btns">
              <link>Edit Account</link>
              <link>Users(21)</link>
              <link>All Stories</link>
              <button>Subscriptions</button>
            </div>
          </div>
          <div className="admin-btn">
            <button>Add Admin</button>
          </div>
        </div>

        <form>
          <div className="form-name">
            <label>
              First Name <br />
              <input type="text" placeholder="Mark" />
            </label>
            <label>
              Last Name <br />
              <input type="text" placeholder="Essien" />
            </label>
          </div>

          <label>
            City <br />
            <input type="text" placeholder="San Francisco" className="city" />
          </label>

          <div className="region-section">
            <label>
              State <br />
              <input type="text" placeholder="california" />
            </label>
            <label>
              Country <br />
              <input type="text" placeholder="America" />
            </label>
          </div>
        </form>

        <div className="email-cover">
          <div>
            <p>Email Address</p>
            <p>Your email address is marke@storyai.com</p>
          </div>
          <a href="#">Hide</a>
        </div>

        <div className="email-details">
          <div className="mail-inputs">
            <label className="mail-sec">
              New Email Address <br />
              <input type="text" placeholder="America" />
            </label>
            <label className="mail-sec">
              Current Password <br />
              <input type="text" placeholder="America" />
            </label>
          </div>

          <div className="mail-btns">
            <button className="btn-1">Cancel</button>
            <button className="btn-2">Save</button>
          </div>
        </div>

        <div className="footer">
            <input type="checkbox"/> 
          <div>
            <b>Email</b> <br/>
            <p>Only approved emails can function as admin.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
