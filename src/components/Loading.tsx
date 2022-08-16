import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
`;

const pixelLen = 6;
const pixelMargin = 4;
const Pixel = styled(motion.div)<{ color: string }>`
  width: ${pixelLen}px;
  height: ${pixelLen}px;
  background-color: ${({ color }) => color};
  &:not(:first-child) {
    margin-left: ${pixelMargin}px;
  }
`;

const staggerDuration = 0.2;
const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: staggerDuration,
    }
  },
  show: {
    transition: {
      staggerChildren: staggerDuration,
    }
  },
};

const pixelVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: [0, 1, 0],
  },
};

const pixelTransition = {
  duration: staggerDuration * 4,
  repeat: Infinity,
  repeatDelay: staggerDuration * 2,
  times: [0, 0.5, 1],
};

interface LoadingProps {
  color: string;
}

const Loading: FC<LoadingProps> = ({ color }) => {
  const pixelCount = 3;
  return (
    <Container
      variants={containerVariants}
      initial='hidden'
      animate='show'
    >
      {Array(pixelCount).fill(null).map((_, idx) =>
        <Pixel
          key={idx}
          {...{ color }}
          variants={pixelVariants}
          transition={pixelTransition}
        ></Pixel>
      )}
    </Container>
  );
};

export {
  Loading,
  type LoadingProps,
};