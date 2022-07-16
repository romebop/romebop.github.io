import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from 'react-router-dom';

import './App.css';
import useKeyPress from './hooks/useKeypress';
import map from './map';
import PlacePort from './components/PlacePort';

type Point = { x: number, y: number };
type Direction = 'Up' | 'Down' | 'Left' | 'Right';

function App() {

  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });

  const movePos = (d: Direction): void => {
    if (d === 'Up' && map[pos.y - 1] && map[pos.y - 1][pos.x]) setPos({ x: pos.x, y: pos.y - 1 });
    if (d === 'Down' && map[pos.y + 1] && map[pos.y + 1][pos.x]) setPos({ x: pos.x, y: pos.y + 1 });
    if (d === 'Left' && map[pos.y][pos.x - 1]) setPos({ x: pos.x - 1, y: pos.y });
    if (d === 'Right' && map[pos.y][pos.x + 1]) setPos({ x: pos.x + 1, y: pos.y });
  };
  const onArrowPress = (event: KeyboardEvent): void => {
    movePos(event.key.slice(5) as Direction);
  };
  useKeyPress(['Up', 'Down', 'Left', 'Right'].map(d => `Arrow${d}`), onArrowPress);
  
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
                          readOnly
                        />
                      </div>
                    )
                  }
                </div>
              )}
            </div>
          </div>
          <AnimatePresence exitBeforeEnter>
            <PlacePort key={place.name} pos={pos}>
              <div style={{ fontSize: 24, fontWeight: 600 }}>{place.name}</div>
              <div style={{ fontSize: 14, marginTop: 14, marginBottom: 14 }}>{place.description}</div>
              {place.component && place.component}
            </PlacePort>
          </AnimatePresence>
        </div>
      </header>
    </div>
  );
}

export default App;
