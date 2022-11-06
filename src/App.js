import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './pages/NavBar';
import Contact from './pages/contact';
import Zuri from './assets/zuri.svg'
import Ingressive from './assets/ingressive.png'

function App() {
  return (
    <div>        
      
      <Router>
          <Routes>
          <Route path='/' element={<NavBar />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>

      <footer>
        <img src={Zuri} alt="Zuri logo"/>

        <p>HNG Intership 9 Frontend Task</p>

        <img src={Ingressive} alt="Ingressive logo" />
      </footer>
    </div>
  );
}

export default App;