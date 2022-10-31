import "./App.css";

function App() {
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
          <img alt="" src="./images/slack.png" />
          <img alt="" src="./images/github-icon.jpg" />
        </div>
      
      <div className="footer">
        <img alt="" src="./images/vector.jpg" />
        <img alt="" src="./images/Footer text.jpg" />
        <img alt="" src="./images/I4G.jpg" />
      </div>
    </div>
  );
}

export default App;
