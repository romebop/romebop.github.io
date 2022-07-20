import { useState } from 'react';
import styled from 'styled-components';
// import {
//   HashRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from 'react-router-dom';

import MapArea, { MapAreaProps } from './components/MapArea';
import PlaceArea, { PlaceAreaProps } from './components/PlaceArea';
import useKeyPress from './hooks/useKeypress';
import map from './map';
import { Point, Direction } from './types';

const Container = styled.div`
  background-color: #4c4182;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const MapAreaWrapper = styled.div`
  width: 200px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PlaceAreaWrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

function App() {

  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
  const place = map[pos.y][pos.x];
  const [dir, setDir] = useState<Direction>('Teleport');

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

  const teleportPos = (pos: Point): void => {
    setPos(pos);
    setDir('Teleport');
  };

  const mapAreaProps: MapAreaProps = { map, pos, teleportPos };
  const placeAreaProps: PlaceAreaProps = { place, dir };

  return (
    <Container>
      <MapAreaWrapper>
        <MapArea {...mapAreaProps} />
      </MapAreaWrapper>
      <PlaceAreaWrapper>
        <PlaceArea {...placeAreaProps} />
      </PlaceAreaWrapper>
    </Container>
  );
}

export default App;

/*
<Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/visualizations'>Visualizations</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/visualizations' element={<Visualizations />} />
    </Routes>
  </div>
</Router>
*/