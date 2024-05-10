import { keyframes } from 'styled-components/macro';

const scaleHeight = (start: number, end: number) => keyframes`
  from {
    transform: scaleY(${start});
  }
  to {
    transform: scaleY(${end});
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

const orbit = (orbitRadius: number) => keyframes`
  from {
    transform: rotate(0deg) translateX(${orbitRadius}px);
  }
  to {
    transform: rotate(360deg) translateX(${orbitRadius}px);
  }
`;

export {
  scaleHeight,
  flicker,
  orbit,
};