import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import pix from './mine.jpg'
import slack from './slack.svg'
import github from './github.svg'

const NavBar = () => {
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

            <a href="https://books.zuri.team/python-for-beginners?ref_id=OluwadamilolaAdeleke" id='book_python'>Python Books</a>

            <a href="https://background.zuri.team" id='pitch'>Background Check for Coder</a>

            <a href="https://books.zuri.team/design-rules" id='book_design'>Design Books</a>
            
            <Link to="/Contact" id='contact'>Contact Me</Link>
            <div className='socials'>
              <a href="https://slack.com">
                <img src={slack} alt="slack logo" />
              </a>

              <a href="https://github.com/od-adeleke/Landing-Page">
                <img src={github} alt="github logo" />
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NavBar
