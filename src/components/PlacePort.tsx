import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #0095ff;
  width: 500px;
  height: 500px;
`;

type Point = { x: number, y: number };

const PlacePort = ({ pos, children }: { pos: Point, children: ReactNode}) => {  
  console.log('PlacePort Rendered');

  useEffect(() => {
    return () => { console.log('PlacePort unmounted') };
  }, [])
  
  return (
    <Wrapper
      initial={{
        opacity: 0,
        x: 100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -100,
      }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
    >
      {children}
      <div>({pos.x}, {pos.y})</div>
    </Wrapper>
  );
};

export default PlacePort;