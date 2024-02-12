import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components/macro';

import App from './App';
import { Background, Filter, Mobile } from './components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <Background />
    {window.innerWidth <= 768
      ? <Mobile />
      : <Router>
          <App />
        </Router> 
    }
    <Filter />
  </>
);
