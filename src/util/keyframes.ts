import { keyframes } from 'styled-components/macro';

const changeBackgroundColor = (start: string, end: string) => keyframes`
  from {
    background-color: ${start};
  }
  to {
    background-color: ${end};
  }
`;

const changeColor = (start: string, end: string) => keyframes`
  from {
    color: ${start};
  }
  to {
    color: ${end};
  }
`;

const changeHeight = (startPercentValue: number, endPercentValue: number) => keyframes`
  from {
    height: ${startPercentValue}%;
  }
  to {
    height: ${endPercentValue}%;
  }
`;

const changeOpacity = (start: number, end: number) => keyframes`
  from {
    opacity: ${start};
  }
  to {
    opacity: ${end};
  }
`;

const changeWidth = (startPercentValue: number, endPercentValue: number) => keyframes`
  from {
    width: ${startPercentValue}%;
  }
  to {
    width: ${endPercentValue}%;
  }
`;

const changeBottom = (start: number, end: number) => keyframes`
  from {
    bottom: ${start}px
  }
  to {
    bottom: ${end}px
  }
`;

const changeTop = (start: number, end: number) => keyframes`
  from {
    top: ${start}px;
  }
  to {
    top: ${end}px;
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
  changeBackgroundColor,
  changeBottom,
  changeColor,
  changeHeight,
  changeOpacity,
  changeTop,
  changeWidth,
  flicker,
  orbit,
};