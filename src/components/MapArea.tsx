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
  margin-right: 200px;
`;

const Row = styled.div<{ idx: number }>`
  display: flex;
  margin-left: ${({ idx }) => idx * 16}px;
`;

const PlaceMarker = styled.div<{ x: number, active: boolean }>`
  cursor: pointer;
  margin: 2px 2px;
  width:  80px;
  height: 40px;
  border: 4px solid ${({ active }) => active ? '#fff' : '#444' };
  border-radius: 8px;
  background-color: ${({ active, x }) => active ? colors[x] : '#fff'};
  transform: skewX(20deg);
  box-sizing: border-box;
  position: relative;

  /* &:before {
    content: '';
    z-index: -1;
    background-color: #fff;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    right: -5.5px;
    top: -5.5px;
    position: absolute;
  } */
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
        <Row
          key={y}
          idx={y}
        >
          {row.map((place, x) =>
            <PlaceMarker
              key={place.name}
              x={x}
              active={(x === pos.x) && (y === pos.y)}
              onClick={() => teleportPos({ x, y })}
            />
          )}
        </Row>
      )}
    </Container>
  );
};

export default MapArea;