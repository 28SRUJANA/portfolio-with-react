import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contact';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">N.SRUJANA</h2>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;