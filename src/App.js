import './App.css';
import pix from './mine.jpg'

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={pix} alt="Profile_pic" id='profile__img'/>
        <h3 id='twitter'>O'damilola</h3>
        <small id="slack">Oluwadamilola Adeleke</small>

        <div className="links">
          <a href="https://twitter.com/blac_toon">Twitter Link</a>
          <a href="https://training.zuri.team" id='btn__zuri'>Zuri Team</a>
          <a href="https://books.zuri.team" id='books'>Zuri Books</a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=" id='book_python'>Python Books</a>
          <a href="https://background.zuri.team" id='pitch'>Background Check for Coder</a>
          <a href="https://books.zuri.team/design-rules" id='book_design'>Design Books</a>
        </div>
      </div>
    </div>
  );
}

export default App;