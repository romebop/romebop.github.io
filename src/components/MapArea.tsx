import { FC } from 'react';
import styled from 'styled-components';

import { Point, Place } from 'src/types';
import { colors } from 'src/map';

// &.{yourActiveClassName} { #css goes here}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
`;

const Row = styled.div`
  display: flex;
`;

const PlaceMarkerWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  place-content: center;
`;

const PlaceMarker = styled.div<{ x: number, active: boolean }>`
  cursor: pointer;
  width: 15px;
  height: 15px;
  border: ${({ active }) => active ? '2px' : '0' } solid ${({ active }) => active ? '#fff' : '#444' };
  border-radius: 50%;
  background-color: ${({ active, x }) => active ? colors[x] : '#fff'};
`;

export interface MapAreaProps {
  map: Place[][];
  pos: Point;
  teleportPos: (pos: Point) => void;
}

const MapArea: FC<MapAreaProps> = ({ map, pos, teleportPos }) => {  
  return (
    <Container>
      {map.map((row, y) =>
        <Row key={y}>
          {row.map((place, x) =>
            <PlaceMarkerWrapper key={place.name}>
              <PlaceMarker
                x={x}
                active={(x === pos.x) && (y === pos.y)}
                onClick={() => teleportPos({ x, y })}
              />
            </PlaceMarkerWrapper>
          )}
        </Row>
      )}
    </Container>
  );
};

export default MapArea;