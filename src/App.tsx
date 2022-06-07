import React from 'react';
import ReactGA from 'react-ga'; 
import logo from './logo.svg';
import './App.css';

function App() {

  ReactGA.initialize('UA-231145616-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          test
        </p>
      </header>
    </div>
  );
}

export default App;
