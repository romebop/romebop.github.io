// import { useState } from 'react';
import styled from 'styled-components/macro';
// import {
  // Navigate,
  // Routes,
  // Route,
//   useLocation,
//   useNavigate,
// } from 'react-router-dom';

import {
  What
} from './components';
// import { useKeyPress } from './hooks';
// import map from './map';

// const lineOpacity = 0.05;
// const Background = styled.div`
//   /* background: linear-gradient(-45deg, #13385b, #12355b, #12335c, #11305c, #102d5d, #102a5d, #0f275d, #0f245e, #0e215e);  */
//   background-color: #000;
//   min-height: 100vh;
//   position: relative;
//   &:after {
//     content: '';
//     height: 100%;
//     width: 100%;
//     display: block;
//     background: linear-gradient(
//       to bottom,
//       transparent,
//       transparent 50%,
//       hsla(0, 0%, 0%, ${lineOpacity}) 50%,
//       hsla(0, 0%, 0%, ${lineOpacity})
//     );
//     background-size: 100% 8px;
//     position: absolute;
//     top: 0;
//   }
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  align-items: center;
  min-height: 100vh;
`;

function App() {

  // const { pathname } = useLocation();
  // const pos = getMapPos(map, pathname)!;
  // const [dir, setDir] = useState<Direction>('Teleport');
  // const navigate = useNavigate();

  // const movePos = (dir: Direction): void => {
  //   if (dir === 'Up' && map[pos.y - 1] && map[pos.y - 1][pos.x]) {
  //     navigate(map[pos.y - 1][pos.x].path);
  //     setDir(dir);
  //   }
  //   if (dir === 'Down' && map[pos.y + 1] && map[pos.y + 1][pos.x]) {
  //     navigate(map[pos.y + 1][pos.x].path);
  //     setDir(dir);
  //   }
  //   if (dir === 'Left' && map[pos.y][pos.x - 1]) {
  //     navigate(map[pos.y][pos.x - 1].path);
  //     setDir(dir);
  //   }
  //   if (dir === 'Right' && map[pos.y][pos.x + 1]) {
  //     navigate(map[pos.y][pos.x + 1].path)
  //     setDir(dir);
  //   }
  // };
  // const onArrowPress = (event: KeyboardEvent): void => {
  //   movePos(keyDirectionMap[event.key]);
  // };
  // useKeyPress(
  //   ['Up', 'Down', 'Left', 'Right'].map(d => `Arrow${d}`)
  //     .concat(['w', 'a', 's', 'd']), 
  //   onArrowPress,
  // );

  
  return (
    <Container>
      {/* <AreasContainer>
        <MapAreaWrapper>
          {pos && <MapArea {...mapAreaProps} />}
        </MapAreaWrapper>
        <PlaceAreaWrapper>
          <Routes>
            {places.map((place: Place) =>
              <Route
                key={place.name}
                path={place.path}
                element={<PlaceArea key={place.name} {...{ place, dir }} />}
              />
            )}
            <Route
              path='*'
              element={<Navigate to={map[0][0].path} replace />}
            />
          </Routes>
        </PlaceAreaWrapper>
      </AreasContainer>
      <FooterWrapper>
        <Footer />
      </FooterWrapper> */}
      <What />
    </Container>
  );
}

export default App;
