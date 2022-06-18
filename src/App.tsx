import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import drifter from './assets/drifter.gif';
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/visualizations">Visualizations</Link>
                </li>
              </ul>
            </nav> */}
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/visualizations" element={<Visualizations />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

function About() {
  return <img src={drifter} alt="drifter" />;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Visualizations() {
  return <h2>Visualizations</h2>;
}


export default App;
