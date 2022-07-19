import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import {
  Direction,
  Place as IPlace
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

const outOpacity = 0;
const placeVariants = {
  enter: (dir: Direction) => {
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
    }
  },
  center: {
    // zIndex: 1,
    x: 0,
    y: 0,
    opacity: 1
  },
  exit: (dir: Direction) => {
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
    }
  },
};

export interface PlaceProps {
  place: IPlace;
  dir: Direction;
}

const Place: FC<PlaceProps> = ({ place, dir }) => {  
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
          duration: 0.15,
          ease: 'easeOut',
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 600 }}>{place.name}</div>
        <div style={{ fontSize: 14, marginTop: 14, marginBottom: 14 }}>{place.description}</div>
        {place.component && place.component}
      </Wrapper>
    </AnimatePresence>
  );
};

export default Place;