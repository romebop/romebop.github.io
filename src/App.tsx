import React, { useEffect } from 'react';
import ReactGA from 'react-ga'; 
 
import drifter from './assets/drifter.gif';
import './App.css';

function App() {
  
  useEffect(() => {
    ReactGA.initialize('UA-231944724-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={drifter} alt="drifter" />
      </header>
    </div>
  );
}

export default App;
