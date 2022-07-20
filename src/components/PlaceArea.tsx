import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';

import {
  Direction,
  Place,
} from 'src/types';

const Wrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #0095ff;
  width: 500px;
  height: 500px;
`;

const NameSection = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const DescriptionSection = styled.div`
  font-size: 14px;
  margin: 14px 0%;
`;

const outOpacity = 0;
const outScale = 1.2;
const placeVariants = {
  enter: (dir: Direction) => {
    if (dir === 'Teleport') {
      return {
        scale: outScale,
        opacity: outOpacity,
      };
    } else {
      let x: number, y: number;
      if (dir === 'Up') {
        x = 0;
        y = -100;
      } else if (dir === 'Down') {
        x = 0;
        y = 100;
      } else if (dir === 'Left') {
        x = -100;
        y = 0;
      } else { // (dir === 'Right')
        x = 100;
        y = 0;
      }
      return {
        x,
        y,
        opacity: outOpacity,
      };
    }
  },
  center: {
    // zIndex: 1,
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1
  },
  exit: (dir: Direction) => {
    if (dir === 'Teleport') {
      return {
        scale: outScale,
        opacity: outOpacity,
      };
    } else {
      let x: number, y: number;
      if (dir === 'Up') {
        x = 0;
        y = 100;
      } else if (dir === 'Down') {
        x = 0;
        y = -100;
      } else if (dir === 'Left') {
        x = 100;
        y = 0;
      } else { // (dir === 'Right')
        x = -100;
        y = 0;
      }
      return {
        // zIndex: 0,
        x,
        y,
        opacity: outOpacity,
      };
    }
  },
};

export interface PlaceAreaProps {
  place: Place;
  dir: Direction;
}

const PlaceArea: FC<PlaceAreaProps> = ({ place, dir }) => {  
  return (
    <AnimatePresence custom={dir}>
      <Wrapper
        key={place.name}
        variants={placeVariants}
        custom={dir}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.25,
          ease: 'easeOut',
        }}
      >
        <NameSection>{place.name}</NameSection>
        <DescriptionSection>{place.description}</DescriptionSection>
        {place.img && place.img}
      </Wrapper>
    </AnimatePresence>
  );
};

export default PlaceArea;