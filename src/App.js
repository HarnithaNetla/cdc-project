import React from 'react';

import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import './App.css';

import HOME from './components/home';
import ABOUT from './components/About';
import CONTACTUS from './components/contactus';
import WORKSHOPS from './components/workshops';
import STUDENTACHIEVEMENTS from './components/stuach';
import PLACEMENTS from './components/placements';
import INTERNSHIP from './components/internship';
import DEVELOPERS from './components/developers';
import TRAINING from './components/training';

import cdc from './components/cdc.png';
import logo from './components/logoz.png';
  
function App() {
  return (
    <Router>
    <div className="App">
      
      <header className="App-header">
      <nav> 
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="cdc-logo">
        <img src={cdc} alt="CDC" className="CDC" />
      </div>


      <ul>
      
      <h1>SANTHIRAM ENGINEERING COLLEGE </h1>
      
        <h2>(AUTONOMOUS)</h2>
        <h3>CAREER DEVELOPMENT CELL</h3>
        <hr />
              <li><Link to="/">Home</Link></li>
              <li><a href='about'> About</a></li>
              <li><a href='internship'> Internship</a></li>
              <li><a href='training'> Training</a></li>
              <li><a href='placements'> Placements</a></li>
              <li><a href='stuach'> Student Achievements</a></li>
              <li><a href='workshops'> Workshops </a></li>
              <li><a href='contactus'> Contact Us</a></li>
              <li><a href='Developers'> Developers </a></li>
            </ul>
          </nav>
          
        
      </header>
      <div className='mrq'>
      <marquee>WELCOME TO CAREER DEVELOPMENT CELL </marquee>
    </div>
      <Routes>

      <Route exact path="/" element={<HOME />} />
      <Route exact path="/About" element={<ABOUT />} />
      <Route exact path="/Contactus" element={<CONTACTUS />} />
      <Route exact path="/workshops" element={<WORKSHOPS />} />
      <Route exact path="/stuach" element={<STUDENTACHIEVEMENTS />} />
      <Route exact path="/placements" element={<PLACEMENTS />} />
      <Route exact path="/internship" element={<INTERNSHIP />} />
      <Route exact path="/developers" element={<DEVELOPERS />} />
      <Route exact path="/training" element={<TRAINING />} />

      </Routes>

    </div>
    </Router>
  );
}

export default App;