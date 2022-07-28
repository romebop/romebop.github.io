import { useState } from 'react';
import styled from 'styled-components';
import {
  Navigate,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import MapArea, { MapAreaProps } from './components/MapArea';
import PlaceArea from './components/PlaceArea';
import useKeyPress from './hooks/useKeypress';
import map from './map';
import { Direction, Place, Point } from './types';
import { getMapPos, isSamePoint } from './util';

const Container = styled.div`
  background: linear-gradient(-45deg, #13385b, #12355b, #12335c, #11305c, #102d5d, #102a5d, #0f275d, #0f245e, #0e215e); 
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

  const { pathname } = useLocation();
  const pos = getMapPos(map, pathname)!;
  const [dir, setDir] = useState<Direction>('Teleport');
  const navigate = useNavigate();

  const movePos = (dir: Direction): void => {
    if (dir === 'Up' && map[pos.y - 1] && map[pos.y - 1][pos.x]) {
      navigate(map[pos.y - 1][pos.x].path);
      setDir(dir);
    }
    if (dir === 'Down' && map[pos.y + 1] && map[pos.y + 1][pos.x]) {
      navigate(map[pos.y + 1][pos.x].path);
      setDir(dir);
    }
    if (dir === 'Left' && map[pos.y][pos.x - 1]) {
      navigate(map[pos.y][pos.x - 1].path);
      setDir(dir);
    }
    if (dir === 'Right' && map[pos.y][pos.x + 1]) {
      navigate(map[pos.y][pos.x + 1].path)
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

  const teleportPos = (newPos: Point): void => {
    if (!isSamePoint(newPos, pos)) {
      navigate(map[newPos.y][newPos.x].path);
      setDir('Teleport');
    }
  };

  const mapAreaProps: MapAreaProps = { map, pos, teleportPos };
  const places: Place[] = map.flat();

  return (
    <Container>
      <MapAreaWrapper>
        {pos && <MapArea {...mapAreaProps} />}
      </MapAreaWrapper>
      <PlaceAreaWrapper>
        <Routes>
          {places.map((place: Place) =>
            <Route
              key={place.name}
              path={place.path}
              element={<PlaceArea place={place} dir={dir} />}
            />
          )}
          <Route
            path='*'
            element={<Navigate to={map[0][0].path} replace />}
          />
        </Routes>
      </PlaceAreaWrapper>
    </Container>
  );
}

export default App;
