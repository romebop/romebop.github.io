import { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { Background, Filter, Footer, Mobile } from './components';
import { useWindowDimensions } from './hooks';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

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
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const Main: FC = () => {
  const { width } = useWindowDimensions();
  return width <= 1270
    ? <Mobile />
    : (
      <Router>
        <App />
      </Router>
    );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <Background />
    <Main />
    <Footer />
    <Filter />
  </>
);