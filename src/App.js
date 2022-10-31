import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="heading">
          <img alt="" src="./images/myPic1.png" id="profile__img"/>
          <b>Christopher Okoro</b>
        </div>
        <div className="link-section">
          <a href="https://twitter.com/its_chriso">Twitter Link</a>
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
