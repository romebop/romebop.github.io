import {
    Navigate,
    Routes,
    Route,
    useLocation,
    useNavigate,
  } from 'react-router-dom';
import styled from 'styled-components/macro';

import {
  SelectList
} from 'src/components';
import { useKeyPress } from 'src/hooks';
import map from 'src/map';
import { Direction } from 'src/types';
import { colors, keyDirectionMap } from 'src/util';

// TODO: update export formats
export default function App() {

  const { pathname } = useLocation();
  const categoryPath = pathname.split('/')[1] ?? null;
  const categoryIdx = map.findIndex(category => category.path === categoryPath);
  const itemPath = pathname.split('/')[2] ?? null;
  const itemIdx = map[categoryIdx].items.findIndex(item => item.path === itemPath);

  const navigate = useNavigate();

  const directionMove = (dir: Direction): void => {
    if (dir === 'Left' && itemPath === null && categoryIdx > 0) {
      navigate(map[categoryIdx - 1].path);
    }
    if (dir === 'Right' && itemPath === null && categoryIdx < map.length - 1) {
      navigate(map[categoryIdx + 1].path);
    }
    if (dir === 'Up' && itemPath !== null) {
      if (itemIdx === 0) {
        navigate(categoryPath);
      } else {
        navigate(`${categoryPath}/${map[categoryIdx].items[itemIdx - 1].path}`);
      }
    }
    if (dir === 'Down') {
      if (itemPath === null) {
        navigate(`${categoryPath}/${map[categoryIdx].items[0].path}`);
      } else if (itemIdx < map[categoryIdx].items.length - 1) {
        navigate(`${categoryPath}/${map[categoryIdx].items[itemIdx + 1].path}`);
      }
    }
  };
  const onDirectionPress = (event: KeyboardEvent): void => {
    directionMove(keyDirectionMap[event.key]);
  };
  useKeyPress(Object.keys(keyDirectionMap), onDirectionPress);

  const onEnterEscape = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' && itemPath === null) {
      navigate(`${categoryPath}/${map[categoryIdx].items[0].path}`);
    }
    if (event.key === 'Escape' && itemPath !== null) {
      navigate(categoryPath);
    }
  }
  useKeyPress(['Enter', 'Escape'], onEnterEscape);
  
  return (
    <Container>
  
      <CategoriesContainer>
        {map.map(category => (
          <TempSquare
            key={category.name}
            isSelected={category.path === categoryPath && itemPath === null}
            isActive={category.path === categoryPath && itemPath !== null}
            onClick={() => alert(`GO TO: ${category.path}`)}
          >{category.name}</TempSquare>
        ))}
      </CategoriesContainer>

      <SelectList key={categoryPath} items={map[categoryIdx].items} activeIdx={itemIdx} />

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
      </AreasContainer> */}
  
 
      {/* <FooterWrapper>
        <Footer />
      </FooterWrapper> */} 
 
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

const CategoriesContainer = styled.div`
  display: flex;
`;

const TempSquare = styled.div<{ isSelected: boolean, isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${({ isSelected, isActive }) => isSelected ? colors.primary : isActive ? '#00c0ff85' : colors.inactive };
  color: ${({ isSelected, isActive }) => (isSelected || isActive) ? colors.white : colors.primary };
  margin-bottom: 40px;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
