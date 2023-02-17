import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import './App.css';
import Contact from './Contact';
import About from './About';
import Haircuts from './Haircuts';
import Painting from './Painting';
import Laying from './Laying';
import Nailcare from './Nailcare';


function App() {
 
  return  <Router>
    <nav>
      <Link to="/" className='link'>Главная</Link>
      <Link to="/home" className='link'>Наши услуги</Link>
      <Link to="/haircuts" className='link'>О стрижках</Link>
      <Link to="/painting" className='link'>О покраске</Link>
      <Link to="/laying" className='link'>Об укладках</Link>
      <Link to="/nailcare" className='link'>О маникюре</Link>
      <Link to="/contact" className='link'>Контакты</Link>
    </nav>

    <Routes>
      <Route path="/" element = {<About/>}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/haircuts" element = {<Haircuts/>}/>
      <Route path="/painting" element = {<Painting/>}/>
      <Route path="/laying" element = {<Laying/>}/>
      <Route path="/nailcare" element = {<Nailcare/>}/>
      <Route path="/contact" element = {<Contact/>}/>
    </Routes>
  </Router>   
  
}

export default App;
