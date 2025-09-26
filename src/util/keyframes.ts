import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const flicker = keyframes`
  0%,
  52.5%,
  100% {
    opacity: 0;
  }
  15%,
  35% {
    opacity: 0.25;
  }
`;

const scaleHeight = (start: number, end: number) => keyframes`
  from {
    transform: scaleY(${start});
  }
  to {
    transform: scaleY(${end});
  }
`;

const orbit = (orbitRadius: number) => keyframes`
  from {
    transform: rotate(0deg) translateX(${orbitRadius}px);
  }
  to {
    transform: rotate(360deg) translateX(${orbitRadius}px);
  }
`;

export {
  fadeIn,
  flicker,
  orbit,
  scaleHeight,
};