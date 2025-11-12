import { FC, useState } from 'react';
import styled from 'styled-components';

import skull from 'src/assets/skull.png';
import { DEFAULT_EASING, colors, orbit  } from 'src/util';

const Mobile: FC = () => {

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container>
      <Backdrop {...{ isActive }} />
      <ContentContainer>
        <SquareBorder {...{ isActive }} />
        <OrbitCircleWrapper {...{ isActive }} >
          <OrbitCircle />
        </OrbitCircleWrapper>
        <Circle {...{ isActive }} />
        <SquareA {...{ isActive }} />
        <SquareB {...{ isActive }} />
        <SkullImage
          src={skull}
          onClick={() => setIsActive(s => !s)}
        />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const inDuration = 180;
const outDuration = 160;

const Backdrop = styled.div<{ isActive: boolean }>`
  position: fixed;
  top: 0;
  background-color: ${colors.background};
  width: 100vw;
  height: 100vh;
  transform: scale(${({ isActive }) => isActive ? 1 : 0});
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: transform, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
  z-index: -1;
  pointer-events: none;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const squareBorderLen = 170;
const SquareBorder = styled.div<{ isActive: boolean }>`
  position: absolute;
  border: 10px solid ${colors.white};
  box-sizing: border-box;
  width: ${squareBorderLen}px;
  height: ${squareBorderLen}px;
  transform: scale(${({ isActive }) => isActive ? 1 : 0.5});
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: transform, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
  z-index: -1;
  pointer-events: none;
`;

const OrbitCircleWrapper = styled.div<{ isActive: boolean }>`
  position: absolute;
  transform: translate(${({ isActive }) => isActive ? '140px, -40px' : '-20px, 20px'});
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: transform, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
  z-index: -1;
  pointer-events: none;
`;

const orbitRadius = 10;
const orbitCircleLen = 40;
const orbitCircleBorderLen = 6;
const orbitCircleInnerBorderLen = 4;
const OrbitCircle = styled.div<{ isActive: boolean }>`
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
  animation: ${orbit(orbitRadius)} 10s linear infinite;
`;

const circleLen = 24;
const Circle = styled.div<{ isActive: boolean }>`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.white};
  width: ${circleLen}px;
  height: ${circleLen}px;
  transform: translate(${({ isActive }) => isActive ? '-120px, -20px' : '12px, 12px'});
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: transform, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
  z-index: -1;
  pointer-events: none;
`;

const squareLen = 14;
const SquareA = styled.div<{ isActive: boolean }>`
  position: absolute;
  background-color: ${colors.white};
  width: ${squareLen}px;
  height: ${squareLen}px;
  transform: translate(${({ isActive }) => isActive ? '-70px, 0px' : '7px, 7px'});
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: transform, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
  z-index: -1;
  pointer-events: none;
`;

const SquareB = styled.div<{ isActive: boolean }>`
  position: absolute;
  background-color: ${colors.white};
  width: ${squareLen}px;
  height: ${squareLen}px;
  transform: translate(${({ isActive }) => isActive ? '70px, 0px' : '-7px, 7px'});
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transition-property: transform, opacity;
  transition-duration: ${({ isActive }) => isActive ? inDuration : outDuration}ms;
  transition-timing-function: ${DEFAULT_EASING};
  z-index: -1;
  pointer-events: none;
`;

const SkullImage = styled.img`
  cursor: pointer;
`;

export {
  Mobile,
};
