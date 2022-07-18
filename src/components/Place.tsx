import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

const outOpacity = 0;

const variants = {
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

type Point = { x: number, y: number };

const Place = ({ pos, children }: { pos: Point, children: ReactNode}) => {  
  console.log('Place Rendered');

  useEffect(() => {
    return () => { console.log('Place unmounted') };
  }, [])
  
  return (
    <AnimatePresence
      custom={dir}
    // exitBeforeEnter
    >
      <Wrapper
        key={place.name}
        variants={variants}
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