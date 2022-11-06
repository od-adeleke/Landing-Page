import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Contact from './Contact';
import Zuri from './zuri.svg'
import Ingressive from './ingressive.png'

function App() {
  return (
    <div>        
      
      <Router>
          <Routes>
          <Route path='/' element={<NavBar />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>

      <div>
        <hr/>
      </div>

      <footer>
        <img src={Zuri} alt="Zuri logo"/>

        <p>HNG Intership 9 Frontend Task</p>

        <img src={Ingressive} alt="Ingressive logo" />
        </footer>
    </div>
  );
}

export default App;
