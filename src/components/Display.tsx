import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import {
  DEFAULT_EASING,
  INIT_DURATION,
  colors,
} from 'src/util';

interface DisplayProps {
  header: string;
  description?: string;
  imgName?: string;
}

const Display: FC<DisplayProps> = ({ header }) => {
  return (
    <Container>
      <Shadow />
      <Thing>{header} hihi</Thing>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  box-sizing: border-box;
`;

const Thing = styled.div`
  
`;

const moveShadow = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(4px, 4px);
  }
`;

const Shadow = styled.div`
  background-color: ${colors.shadow};
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  animation:
    ${moveShadow}
    ${INIT_DURATION}ms
    ${DEFAULT_EASING}
    ${INIT_DURATION * 1.6}ms
    forwards
`;

export {
  Display,
  type DisplayProps,
};