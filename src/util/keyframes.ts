import { keyframes } from 'styled-components/macro';

const expandHeight = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
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
  expandHeight,
  flicker,
  orbit,
};