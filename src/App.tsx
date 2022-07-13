import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from 'react-router-dom';

// import drifter from './assets/drifter.gif';
import './App.css';
import useKeyPress from './hooks/useKeypress';
import map from './map';

type Point = { x: number, y: number };
type Direction = 'Up' | 'Down' | 'Left' | 'Right';

function App() {

  console.log('App rendered');

  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
  console.log(`currently on ${map[pos.y][pos.x].name}`);

  const movePos = (d: Direction): void => {
    if (d === 'Up' && map[pos.y - 1] && map[pos.y - 1][pos.x]) setPos({ x: pos.x, y: pos.y - 1 });
    if (d === 'Down' && map[pos.y + 1] && map[pos.y + 1][pos.x]) setPos({ x: pos.x, y: pos.y + 1 });
    if (d === 'Left' && map[pos.y][pos.x - 1]) setPos({ x: pos.x - 1, y: pos.y });
    if (d === 'Right' && map[pos.y][pos.x + 1]) setPos({ x: pos.x + 1, y: pos.y });
  };
  const onArrowPress = (event: KeyboardEvent): void => {
    console.log('trying to move', event.key.slice(5));
    movePos(event.key.slice(5) as Direction);
  };
  useKeyPress(['Up', 'Down', 'Left', 'Right'].map(d => `Arrow${d}`), onArrowPress);
  
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
                    row.map((place, x) =>
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #0095ff', width: 500, height: 500 }}>
            <span style={{ fontSize: 16 }}>{map[pos.y][pos.x].name}</span>
          </div>

        </div>
        <div style={{ marginTop: 50 }}>
          {`(${pos.x}, ${pos.y})`}
        </div>
      </header>
    </div>
  );
}

// function About() {
//   return <img src={drifter} alt="drifter" />;
// }

// function Projects() {
//   return <h2>Projects</h2>;
// }

// function Visualizations() {
//   return <h2>Visualizations</h2>;
// }

export default App;
