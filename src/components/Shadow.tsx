import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import {
  DEFAULT_EASING,
  INIT_DURATION,
  colors,
} from 'src/util';

const Shadow: FC = () => <StyledShadow />;

const moveShadow = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(4px, 4px);
  }
`;

const StyledShadow = styled.div`
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

export { Shadow };