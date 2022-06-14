import React, { useEffect } from 'react';
import ReactGA from 'react-ga'; 
 
import drifter from './assets/drifter.gif';
import './App.css';

function App() {
  
  console.log('app init');
  console.log(window.location.pathname + window.location.search);

  useEffect(() => {
    ReactGA.initialize('UA-231145616-1');
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
