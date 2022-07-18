import { useState } from 'react';
import styled from 'styled-components';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from 'react-router-dom';

import './App.css';
import Place from './components/Place';
import useKeyPress from './hooks/useKeypress';
import map from './map';
import { Point, Direction } from './types';

const PlaceContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {

  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
  const [dir, setDir] = useState<Direction>('Down');

  const movePos = (dir: Direction): void => {
    if (dir === 'Up' && map[pos.y - 1] && map[pos.y - 1][pos.x]) {
      setPos({ x: pos.x, y: pos.y - 1 });
      setDir(dir);
    }
    if (dir === 'Down' && map[pos.y + 1] && map[pos.y + 1][pos.x]) {
      setPos({ x: pos.x, y: pos.y + 1 });
      setDir(dir);
    }
    if (dir === 'Left' && map[pos.y][pos.x - 1]) {
      setPos({ x: pos.x - 1, y: pos.y });
      setDir(dir);
    }
    if (dir === 'Right' && map[pos.y][pos.x + 1]) {
      setPos({ x: pos.x + 1, y: pos.y });
      setDir(dir);
    }
  };
  const onArrowPress = (event: KeyboardEvent): void => {
    movePos(event.key.slice(5) as Direction);
  };
  useKeyPress(
    ['Up', 'Down', 'Left', 'Right'].map(d => `Arrow${d}`), 
    onArrowPress,
  );

  const teleportPos = (x: number, y: number): void => {
    setPos({ x, y });
    setDir('Down');
  };
  
  const place = map[pos.y][pos.x];

  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Router>
          <div>
            <nav>
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
            </nav>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/visualizations" element={<Visualizations />} />
            </Routes>
          </div>
        </Router> */}
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 500, width: 200 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              {map.map((row, y) =>
                <div
                  style={{ display: 'flex' }}
                  key={y}
                >
                  {
                    row.map((_, x) =>
                      <div
                        style={{ width: 30, height: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                        key={x}
                      >
                        <input
                          type='checkbox'
                          checked={x === pos.x && y === pos.y}
                          onChange={() => teleportPos(x, y)}
                          // readOnly
                        />
                      </div>
                    )
                  }
                </div>
              )}
            </div>
          </div>
          <PlaceContainer>
            <Place />
          </PlaceContainer>
        </div>
      </header>
    </div>
  );
}

export default App;
