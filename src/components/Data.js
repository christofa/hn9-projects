import React from 'react'

export default function Data() {
  return (
    <div className="App">
    <div className="navigation-icons">
    <img alt="" src="./images/refresh-btn.jpg" className="refresh" />
    <img alt="" src="./images/icon-dot.jpg" className="dotted" />
    </div>
      <div className="heading">
        <img alt="" src="./images/myPic1.png" id="profile__img"/>
        <b>Christopher Okoro</b>
      </div>
      <div className="link-section">
    <a href="https://twitter.com/its_chriso" id ="twitter">Twitter Link</a>
    <a href="https://training.zuri.team/" id="btn__zuri">
      Zuri Team
    </a>
    <a href="http://books.zuri.team" id="books">
      Zuri Books
    </a>
    <a href="https://books.zuri.team" id="book__python">
      Python Books
    </a>
    <a href="https://background.zuri.team" id="pitch">
      Background Check for Coders
    </a>
    <a href="https://books.zuri.team/design-rules" id="book__design">
      Design Books{" "}
    </a>
  </div>
      <div className="media-section">
        <a href="https://hng9.slack.com/christopherokoro"><img alt="" src="./images/slack.png" /></a>
        <a href ="https://github.com/christofa"><img alt="" src="./images/github-icon.jpg" /></a>
      </div>
  </div>
  )
}
