import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components/macro';

import map, { categoryColors } from 'src/map';
import {
  Direction,
  Place,
} from 'src/types';
import { getMapPos } from 'src/util';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  color: hsl(0, 0%, 100%);
`;

const sectionMargin = 24;

const NameSection = styled.div`
  font-size: 24px;
  font-weight: 800;
  border: 1px solid #fff;
  box-sizing: border-box;
  padding: 10px 12px;
`;

const DescriptionSection = styled.a`
  font-size: 14px;
  margin-top: ${sectionMargin}px;
  text-decoration: none;
  color: hsl(0, 0%, 100%);
  line-height: 1.4;
  &:hover {
    text-decoration: underline;
  }
`;

const ImageSection = styled.img`
  width: 400px;
  height: 400px;
  margin-top: ${sectionMargin}px;
`;

const pillarWidth = 3;
const Pillar = styled.div<{ color: string }>`
  position: absolute;
  width: ${pillarWidth}px;
  height: 100%;
  background-color: ${({ color }) => color};
  /* background-color: white; */
  transform: translateX(-${sectionMargin + pillarWidth}px);
`;

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

  const pos = getMapPos(map, place.path)!;
  const color = categoryColors[pos.y];

  return (
    <AnimatePresence custom={dir}>
      <Container
        key={place.name}
        className={place.path}
        variants={placeVariants}
        custom={dir}
        initial='enter'
        animate='center'
        exit='exit'
        transition={{
          duration: 0.2,
        }}
      >
        <NameSection>{place.name}</NameSection>
        <DescriptionSection
          href={place.link}
          title={place.link}
          target='_blank'
        >{place.description}</DescriptionSection>
        {place.imgName && <ImageSection src={require(`src/assets/${place.imgName}`)} />}
        <Pillar {...{ color}} />
      </Container>
    </AnimatePresence>
  );
};

export default PlaceArea;