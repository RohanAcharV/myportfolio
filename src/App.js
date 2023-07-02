import React from 'react';
import Nav from './Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './App.css'

function App() {
  return (
    <div className="App">
        <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
