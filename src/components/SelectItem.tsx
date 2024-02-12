import { FC, } from 'react';
import styled, { css, keyframes } from 'styled-components/macro';

import { ReactComponent as PointerSVG } from 'src/assets/Cursor.svg';
import { colors, tickDuration } from 'src/util';

interface SelectItemProps {
  text: string;
  isSelected: boolean;
  clickHandler: () => void;
}

const SelectItem: FC<SelectItemProps> = ({ text, isSelected, clickHandler }) => {
  return (
    <Container onClick={clickHandler}>
      <StyledPointerSVG {...{ isSelected }} />
      <Shadow {...{ isSelected }} />
      <TopLine {...{ isSelected }} />
      <BottomLine {...{ isSelected }} />
      <FillBar {...{ isSelected}} />
      <ContentSquare {...{ isSelected }} />
      <Text {...{ isSelected }}>{text}</Text>
      <Filter {...{ isSelected}}/>
    </Container>
  );
};

const cubicEasingFunction = 'cubic-bezier(0.27, 1.13, 0.88, 0.96)';
const etcEasingFunction = 'ease-in-out';

const height = 50;
const width = 440;
const Container = styled.div`
  display: flex;
  align-items: center;
  width: ${width}px;
  height: ${height}px;
  background-color: ${colors.inactive};
  cursor: pointer;
  box-sizing: border-box;
  padding-left: 14px;
  overflow: visible;
  position: relative;
`;

const StyledPointerSVG = styled(({ isSelected, ...props }) => (
  <PointerSVG {...props} />
))<{ isSelected: boolean }>`
  position: absolute;
  left: -60px;
  width: 40px;
  height: 28px;
  fill: ${colors.primary};
  pointer-events: none;
  opacity: ${({ isSelected }) => isSelected ? 1 : 0};
  transition:
    opacity
    ${({ isSelected }) => isSelected ? (5 * tickDuration) : (4 * tickDuration)}ms
    ${etcEasingFunction};
`;

const Shadow = styled.div<{ isSelected: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  box-shadow: 2px 2px 4px 0px #000;
  opacity: ${({ isSelected }) => isSelected ? 0.25 : 0};
  transition:
    opacity
    ${({ isSelected }) => isSelected ? (5 * tickDuration) : (4 * tickDuration)}ms
    ${etcEasingFunction};
`;

const FillBar = styled.div<{ isSelected: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${colors.primary};
  z-index: 0;
  width: ${({ isSelected }) => isSelected ? '100%' : 0};
  transition:
    width
    ${({ isSelected }) => isSelected ? (12 * tickDuration) : (5 * tickDuration)}ms
    ${cubicEasingFunction};
`;

const contentSquareLength = 26;
const ContentSquare = styled.div<{ isSelected: boolean }>`
  width: ${contentSquareLength}px;
  height: ${contentSquareLength}px;
  z-index: 1;
  background-color: ${({ isSelected }) => isSelected ? colors.white : colors.primary};
  transition:
    background-color
    ${({ isSelected }) => isSelected ? (5 * tickDuration) : (2 * tickDuration)}ms
    ${etcEasingFunction};
`;

const Text = styled.div<{ isSelected: boolean }>`
  margin-left: 10px;
  height: ${length}px;
  display: flex;
  align-items: center;
  font-size: 24px;
  user-select: none;
  letter-spacing: 0.8px;
  /* text-transform: uppercase; */
  z-index: 1;
  color: ${({ isSelected }) => isSelected ? colors.white : colors.primary};
  transition:
    color
    ${({ isSelected }) => isSelected ? (5 * tickDuration) : (2 * tickDuration)}ms
    ${etcEasingFunction};
`;

const distance = 7;
const thickness = 3;
const TopLine = styled.div<{ isSelected: boolean }>`
  position: absolute;
  height: ${thickness}px;
  width: 100%;
  background-color: ${colors.primary};
  left: 0;
  z-index: -1;
  top: ${({ isSelected }) => isSelected ? -distance : 0}px;
  opacity: ${({ isSelected }) => isSelected ? 1 : 0};
  transition-property: top, opacity;
  transition-duration: ${({ isSelected }) => isSelected ? (5 * tickDuration) : (4 * tickDuration)}ms;
  transition-timing-function: ${etcEasingFunction};
`;

const BottomLine = styled.div<{ isSelected: boolean }>`
  position: absolute;
  height: ${thickness}px;
  width: 100%;
  background-color: ${colors.primary};
  left: 0;
  z-index: -1;

  bottom: ${({ isSelected }) => isSelected ? -distance : 0}px;
  opacity: ${({ isSelected }) => isSelected ? 1 : 0};
  transition-property: bottom, opacity;
  transition-duration: ${({ isSelected }) => isSelected ? (5 * tickDuration) : (4 * tickDuration)}ms;
  transition-timing-function: ${etcEasingFunction};
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

const Filter = styled.div<{ isSelected: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0;
  ${({ isSelected }) => isSelected && css`
    animation: ${flicker} ${tickDuration * 40 * 1.4}ms ease-in-out infinite;
  `}
`;

export {
  SelectItem,
  type SelectItemProps,
};