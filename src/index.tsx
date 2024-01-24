import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components/macro';

import App from './App';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f0f1f7;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const FilterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 8px 8px;
  background-image:
    linear-gradient(to right,rgba(0,0,0,0.008) 2px,transparent 2px),
    linear-gradient(to bottom,rgba(0,0,0,0.008) 2px,transparent 2px);
  pointer-events: none;
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
    <FilterOverlay />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
