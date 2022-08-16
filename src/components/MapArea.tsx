import { FC } from 'react';
import styled from 'styled-components/macro';

import { PlaceMarker } from 'src/components'
import { categoryColors } from 'src/map';
import { Point, Place } from 'src/types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
`;

const placeMarkerMargin = 26;
const Row = styled.div`
  display: flex;
  &:not(:first-child) {
    margin-top: ${placeMarkerMargin}px;
  }
`;
const PlaceMarkerWrapper = styled.div`
  &:not(:first-child) {
    margin-left: ${placeMarkerMargin}px;
  }
`;

export interface MapAreaProps {
  map: Place[][];
  pos: Point;
  teleportPos: (pos: Point) => void;
}

export const MapArea: FC<MapAreaProps> = ({ map, pos, teleportPos }) => {  

  const isActive = ({ x, y }: Point): boolean => {
    return (x === pos.x) && (y === pos.y);
  }
  
  return (
    <Container>
      {map.map((row, y) =>
        <Row key={y}>
          {row.map((place, x) =>
            <PlaceMarkerWrapper key={place.name}>
              <PlaceMarker
                pos={{ x, y }}
                color={categoryColors[y]}
                isActive={isActive({ x, y })}
                teleportPos={teleportPos}
              />
            </PlaceMarkerWrapper>
          )}
        </Row>
      )}
    </Container>
  );
};
