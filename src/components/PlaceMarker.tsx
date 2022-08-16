import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components/macro';

import { Point } from 'src/types';
import { getHslType, setHslLightness } from 'src/util';

const len = 20;
const Container = styled.div`
  width: ${len}px;
  height: ${len}px;
  position: relative;
`;

const lightnessOffset = 35;
const Target = styled(motion.div)<{ color: string }>`
  cursor: pointer;
  width: ${len}px;
  height: ${len}px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ color }) => setHslLightness(color, getHslType(color).lightness + lightnessOffset)};
  background-color: ${({ color }) => setHslLightness(color, getHslType(color).lightness + lightnessOffset)};
  box-sizing: border-box;
  position: relative;
  position: absolute;
  z-index: 3;
`;

const Shadow = styled(motion.div)`
  width: ${len}px;
  height: ${len}px;
  background-color: hsl(0, 0%, 100%);
  opacity: 0;
  position: absolute;
  z-index: 2;
`;

export interface PlaceMarkerProps {
  pos: Point;
  color: string;
  isActive: boolean;
  teleportPos: (pos: Point) => void;
}

const scaleSize = 1.4;
const originOffset = 0.25;
const transitionDuration = 0.2;
export const PlaceMarker: FC<PlaceMarkerProps> = ({ pos, color, isActive, teleportPos }) => {
  return (
    <Container>
      <Target
        {...{ color }}
        onClick={() => teleportPos(pos)}
        animate={{
          scale: isActive ? scaleSize : 1,
          borderColor: isActive ? 'hsl(0, 0%, 100%)' : setHslLightness(color, getHslType(color).lightness + lightnessOffset),
          backgroundColor: isActive ? color : setHslLightness(color, getHslType(color).lightness + lightnessOffset),
        }}
        transition={{
          duration: transitionDuration,
        }}
        style={{
          originX: 1 - originOffset,
          originY: 1 - originOffset,
        }}
      />
      <Shadow
        animate={{
          scale: isActive ? scaleSize : 1,
          opacity: isActive ? 1 : 0,
          // x: isActive ? 2 : 0,
          // y: isActive ? 2 : 0,
        }}
        transition={{
          duration: transitionDuration,
        }}
        style={{
          originX: 0 + originOffset,
          originY: 0 + originOffset,
        }}
      />
    </Container>
  );
};
