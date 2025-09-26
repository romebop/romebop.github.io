import { FC, useState } from 'react';
import styled from 'styled-components';

import skull from 'src/assets/skull.png';
import { DEFAULT_EASING, colors, orbit  } from 'src/util';

// TODO: animate with transform

const Mobile: FC = () => {

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container>
      <Backdrop {...{ isActive }} />
      <SquareBorder {...{ isActive }} />
      <OrbitCircle {...{ isActive }} />
      <Circle {...{ isActive }} />
      <SquareA {...{ isActive }} />
      <SquareB {...{ isActive }} />
      <SkullImage
        src={skull}
        onClick={() => setIsActive(s => !s)}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const inDuration = 180;
const outDuration = 160;

const Backdrop = styled.div<{ isActive: boolean }>`
  position: absolute;
  background-color: ${colors.background};
  width: ${({ isActive }) => isActive ? '100vw' : 0};
  height: ${({ isActive }) => isActive ? '100vh' : 0};
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: width, height, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
`;

const squareBorderLen = 170;
const SquareBorder = styled.div<{ isActive: boolean }>`
  position: absolute;
  border: 10px solid ${colors.white};
  box-sizing: border-box;
  width: ${({ isActive }) => isActive ? squareBorderLen : 100}px;
  height: ${({ isActive }) => isActive ? squareBorderLen : 110}px;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: width, height, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
`;

const orbitRadius = 10;
const orbitCircleLen = 40;
const orbitCircleBorderLen = 6;
const orbitCircleInnerBorderLen = 4;
const OrbitCircle = styled.div<{ isActive: boolean }>`
  position: absolute;
  border-radius: 50%;
  border: ${orbitCircleBorderLen}px solid ${colors.white};
  box-sizing: border-box;
  height: ${orbitCircleLen}px;
  width: ${orbitCircleLen}px;
  display: flex;
  justify-content: center;
  align-items: center;
  ::after {
    content: '';
    display: block;
    border-radius: 50%;
    background-color: ${colors.white};
    width: ${orbitCircleLen - (orbitCircleBorderLen * 2) - (orbitCircleInnerBorderLen * 2)}px;
    height: ${orbitCircleLen - (orbitCircleBorderLen * 2) - (orbitCircleInnerBorderLen * 2)}px;
  }
  left: ${({ isActive }) => isActive ? 90 : -(orbitCircleLen / 2)}px;
  bottom: ${({ isActive }) => isActive ? 116 : -(orbitCircleLen / 2)}px;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: left, bottom, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
  animation: ${orbit(orbitRadius)} 10s linear infinite;
`;

const circleLen = 24;
const Circle = styled.div<{ isActive: boolean }>`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.white};
  width: ${circleLen}px;
  height: ${circleLen}px;
  right: ${({ isActive }) => isActive ? 109 : -(circleLen / 2)}px;
  bottom: ${({ isActive }) => isActive ? 85 : -(circleLen / 2)}px;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: right, bottom, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
`;

const squareLen = 14;
const SquareA = styled.div<{ isActive: boolean }>`
  position: absolute;
  background-color: ${colors.white};
  width: ${squareLen}px;
  height: ${squareLen}px;
  right: ${({ isActive }) => isActive ? 69 : -(squareLen / 2)}px;
  top: ${({ isActive }) => isActive ? 97 : -(squareLen / 2)}px;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: right, top, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
`;

const SquareB = styled.div<{ isActive: boolean }>`
  position: absolute;
  background-color: ${colors.white};
  width: ${squareLen}px;
  height: ${squareLen}px;
  left: ${({ isActive }) => isActive ? 69 : -(squareLen / 2)}px;
  top: ${({ isActive }) => isActive ? 97 : -(squareLen / 2)}px;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: left, top, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
`;

const SkullImage = styled.img`
  position: absolute;
  cursor: pointer;
`;

export {
  Mobile,
};
