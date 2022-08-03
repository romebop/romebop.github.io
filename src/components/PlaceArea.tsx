import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components/macro';

import {
  Direction,
  Place,
} from 'src/types';

const Wrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* width: 500px; */
  height: 500px;
`;

const sectionMargin = '20px';

const NameSection = styled.div`
  font-size: 24px;
  font-weight: 800;
`;

const DescriptionSection = styled.div`
  font-size: 14px;
  margin-top: ${sectionMargin};
`;

const LinkSection = styled.a`
  font-size: 14px;
  color: white;
  margin-top: ${sectionMargin};
`;

const ImageSection = styled.img`
  width: 500px;
  height: 500px;
  margin-top: ${sectionMargin};
`

const outOpacity = 0;
const outScale = 1.2;
const placeVariants = {
  enter: (dir: Direction) => {
    if (dir === 'Teleport') {
      return {
        scale: outScale,
        opacity: outOpacity,
        zIndex: 0,
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
        zIndex: 0,
      };
    }
  },
  center: {
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (dir: Direction) => {
    if (dir === 'Teleport') {
      return {
        scale: outScale,
        opacity: outOpacity,
        zIndex: 0,
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
        x,
        y,
        opacity: outOpacity,
        zIndex: 0,
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
        initial='enter'
        animate='center'
        exit='exit'
        transition={{
          duration: 0.2,
          // ease: 'easeOut',
        }}
      >
        <NameSection>{place.name}</NameSection>
        <DescriptionSection>{place.description}</DescriptionSection>
        <LinkSection
          href={place.link}
          target='_blank'
        >{place.link}</LinkSection>
        {place.imgName && <ImageSection src={require(`src/assets/${place.imgName}`)} />}
      </Wrapper>
    </AnimatePresence>
  );
};

export default PlaceArea;