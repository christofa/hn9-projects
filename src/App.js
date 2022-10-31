import './App.css';

function App() {
  return (
    <div className="App">
     <div className="wrapper">
      <div className="heading">
        <img alt="profile-pic"/>
        <b>Christopher Okoro</b>
      </div>
      <div className="link-section">
        <a href="https://twitter.com/its_chriso"  >Twitter Link</a>
        <a href="https://training.zuri.team/" id ="btn__zuri" >Zuri Team</a>
        <a href="http://books.zuri.team" id ="books" >Zuri Books</a>
        <a href="https://books.zuri.team"  id ="book__python">Python Books</a>
        <a href="https://background.zuri.team" id ="pitch" >Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id ="book__design" >Design Books </a>
      </div>
      <div className="media-section"></div>
     </div>
     <div className="footer"></div>
    </div>
  );
}

export default App;
