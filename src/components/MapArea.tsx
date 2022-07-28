import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';

import { Point, Place } from 'src/types';
import { categoryColors } from 'src/map';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  margin-right: 300px;
`;

const Row = styled.div`
  display: flex;
`;

const length = 50;
const PlaceMarkerWrapper = styled.div`
  width: ${length}px;
  height: ${length}px;
  display: grid;
  place-items: center;
`;

const inactiveLen = 12;
const activeLen = 30;
const inactiveBorderLen = 1;
const activeBorderLen = 4;
const inactiveBorderRad = 1;
const activeBorderRad = 4;
const PlaceMarker = styled(motion.div)<{ categoryIdx: number, isActive: boolean }>`
  cursor: pointer;
  width: ${({ isActive }) => isActive ? `${activeLen}px` : `${inactiveLen}px`};
  height: ${({ isActive }) => isActive ? `${activeLen}px` : `${inactiveLen}px`};
  border: ${({ isActive }) => isActive ? `${activeBorderLen}px` : `${inactiveBorderLen}px`} solid #fff;
  background-color: ${({ categoryIdx }) => categoryColors[categoryIdx]};
  box-sizing: border-box;
  position: relative;
  border-radius: ${({ isActive }) => isActive ? `${activeBorderRad}px` : `${inactiveBorderRad}px`};

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
                categoryIdx={x}
                isActive={isActive({ x, y })}
                onClick={() => teleportPos({ x, y })}
                animate={{
                  width: isActive({ x, y }) ? activeLen : inactiveLen,
                  height: isActive({ x, y }) ? activeLen : inactiveLen,
                  borderWidth: isActive({ x, y }) ? activeBorderLen : inactiveBorderLen,
                  borderRadius: isActive({ x, y }) ? activeBorderRad : inactiveBorderLen,
                }}
                transition={{
                  duration: 0.1,
                  ease: 'easeOut',
                }}
              />
            </PlaceMarkerWrapper>
          )}
        </Row>
      )}
    </Container>
  );
};

export default MapArea;