import { ComponentType, FC, SVGProps } from 'react';
import styled, { css, keyframes } from 'styled-components';

import {
  DEFAULT_EASING,
  FLICKER_DURATION,
  INIT_DURATION,
  TICK_DURATION,
  colors,
  flicker,
} from 'src/util';

interface CategoryBoxProps {
  Marker: ComponentType<SVGProps<SVGSVGElement>>;
  isSelected: boolean;
  isActive: boolean;
  handleClick: () => void;
}

const CategoryBox: FC<CategoryBoxProps> = ({ Marker, isSelected, isActive, handleClick }) => (
  <Container
    isSelected={isSelected}
    isActive={isActive}
    onClick={handleClick}
  >
    {/* {(isSelected || isActive) && (
      <Shadow />
    )} */}
    <StyledMarker
      as={Marker}
      isSelected={isSelected}
      isActive={isActive}
    />
  </Container>
);

const BoxLength = 80;
const Container = styled.div<{ isSelected: boolean, isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${BoxLength}px;
  height: ${BoxLength}px;
  cursor: pointer;
  background-color: ${({ isSelected }) => isSelected ? colors.primary : colors.inactive};
  border: 3px solid ${({ isActive }) => isActive ? colors.primary : 'transparent'};
  box-sizing: content-box;
  position: relative;
  
  /* transition:
    background-color
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (2 * TICK_DURATION)}ms
    ${DEFAULT_EASING}; */

  /* & > svg {
    transform: scale(${({ isSelected, isActive }) => (isSelected || isActive) ? 0.6 : 0.4 });
    transition: transform ${INIT_DURATION}ms ${DEFAULT_EASING};
  } */

  /* ${({ isSelected }) => isSelected && css`
    animation:
      ${flicker}
      ${FLICKER_DURATION}ms
      ${DEFAULT_EASING}
      infinite;
  `} */
`;

const markerLength = 16;
const StyledMarker = styled.svg.withConfig({
  shouldForwardProp: prop => prop !== ('isSelected' as any) && prop !== ('isActive' as any),
})<{ isSelected: boolean, isActive: boolean }>`
  width: ${markerLength}px;
  height: ${markerLength}px;

  color: ${({ isSelected, isActive }) => (isSelected || isActive)
    ? colors.white
    : colors.primary};
  /* transition:
    color
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (2 * TICK_DURATION)}ms
    ${DEFAULT_EASING}; */
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
  CategoryBox,
  type CategoryBoxProps,
};
