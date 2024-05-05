import { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components/macro';

import { ReactComponent as PointerSVG } from 'src/assets/Cursor.svg';
import { useScramble } from 'src/hooks';
import { colors } from 'src/util';
import { DEFAULT_EASING, FLICKER_DURATION, TICK_DURATION } from 'src/util/constants';
import {
  changeBackgroundColor,
  changeBottom,
  changeColor,
  changeOpacity,
  changeTop,
  changeWidth,
  flicker,
} from 'src/util/keyframes';

interface ListItemProps {
  text: string;
  isSelected: boolean;
  handleClick: () => void;
  animationDelay?: number;
}

const ListItem: FC<ListItemProps> = ({
    text,
    isSelected,
    handleClick,
    animationDelay = 0,
  }) => {

  const [isLoading, setIsLoading] = useState<boolean>(animationDelay !== 0);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsLoading(false);
    }, animationDelay)

    return () => {
      clearTimeout(timeoutID);
    };
  }, [animationDelay])

  const ref = useScramble({ text, animationDelay }) as any;

  return (
    <Container onClick={handleClick}>
      <StyledPointerSVG {...{ isSelected, isLoading, animationDelay }} />
      <Shadow {...{ isSelected, isLoading, animationDelay }} />
      <TopLine {...{ isSelected, isLoading, animationDelay }} />
      <BottomLine {...{ isSelected, isLoading, animationDelay }} />
      <FillBar {...{ isSelected, isLoading, animationDelay }} />
      <ContentSquare {...{ isSelected, isLoading, animationDelay }} />
      <Text {...{ ref, isSelected, isLoading, animationDelay }} />
      <Filter {...{ isSelected, isLoading, animationDelay }}/>
    </Container>
  );
};

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

const StyledPointerSVG = styled(({ isSelected, isLoading, animationDelay, ...props }) => (
  <PointerSVG {...props} />
))<{ isSelected: boolean, isLoading: boolean, animationDelay: number }>`
  position: absolute;
  left: -60px;
  width: 40px;
  height: 28px;
  fill: ${colors.primary};
  pointer-events: none;

  opacity: 0;
  animation:
    ${({ isSelected }) => isSelected ? changeOpacity(0, 1) : changeOpacity(1, 0)}
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (4 * TICK_DURATION)}ms
    ${DEFAULT_EASING}
    ${({ isLoading, animationDelay }) => isLoading ? animationDelay : 0}ms
    forwards;
`;

const Shadow = styled.div<{ isSelected: boolean, isLoading: boolean, animationDelay: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  box-shadow: 2px 2px 4px 0px #000;

  opacity: 0;
  animation:
    ${({ isSelected }) => isSelected ? changeOpacity(0, 0.25) : changeOpacity(0.25, 0)}
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (4 * TICK_DURATION)}ms
    ${DEFAULT_EASING}
    ${({ isLoading, animationDelay }) => isLoading ? animationDelay : 0}ms
    forwards;
`;

const fillEasing = 'cubic-bezier(0.27, 1.13, 0.88, 0.96)';
const FillBar = styled.div<{ isSelected: boolean, isLoading: boolean, animationDelay: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${colors.primary};
  z-index: 0;

  width: 0;
  animation:
    ${({ isSelected }) => isSelected ? changeWidth(0, 100) : changeWidth(100, 0)}
    ${({ isSelected }) => isSelected ? (12 * TICK_DURATION) : (5 * TICK_DURATION)}ms
    ${fillEasing}
    ${({ isLoading, animationDelay }) => isLoading ? animationDelay : 0}ms
    forwards;
`;

const contentSquareLength = 26;
const ContentSquare = styled.div<{ isSelected: boolean, isLoading: boolean, animationDelay: number }>`
  width: ${contentSquareLength}px;
  height: ${contentSquareLength}px;
  z-index: 1;

  background-color: ${colors.primary};
  animation:
    ${({ isSelected }) => isSelected
      ? changeBackgroundColor(colors.primary, colors.white)
      : changeBackgroundColor(colors.white, colors.primary) }
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (2 * TICK_DURATION)}ms
    ${DEFAULT_EASING}
    ${({ isLoading, animationDelay }) => isLoading ? animationDelay : 0}ms
    forwards;
`;

const Text = styled.div<{ isSelected: boolean, isLoading: boolean, animationDelay: number }>`
  margin-left: 10px;
  height: ${length}px;
  display: flex;
  align-items: center;
  font-size: 24px;
  user-select: none;
  letter-spacing: 0.8px;
  /* text-transform: uppercase; */
  z-index: 1;

  color: ${colors.primary};
  animation:
    ${({ isSelected }) => isSelected
      ? changeColor(colors.primary, colors.white)
      : changeColor(colors.white, colors.primary)}
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (2 * TICK_DURATION)}ms
    ${DEFAULT_EASING}
    ${({ isLoading, animationDelay }) => isLoading ? animationDelay : 0}ms
    forwards;
`;

const distance = 7;
const thickness = 3;
const TopLine = styled.div<{ isSelected: boolean, isLoading: boolean, animationDelay: number }>`
  position: absolute;
  height: ${thickness}px;
  width: 100%;
  background-color: ${colors.primary};
  left: 0;
  z-index: -1;

  top: 0;
  opacity: 0;
  animation-name:
    ${({ isSelected }) => isSelected ? changeTop(0, -distance) : changeTop(-distance, 0)},
    ${({ isSelected }) => isSelected ? changeOpacity(0, 1) : changeOpacity(1, 0)};
  animation-duration: ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (4 * TICK_DURATION)}ms;
  animation-timing-function: ${DEFAULT_EASING};
  animation-delay: ${({ isLoading, animationDelay }) => isLoading ? animationDelay : 0}ms;
  animation-fill-mode: forwards;
`;

const BottomLine = styled.div<{ isSelected: boolean, isLoading: boolean, animationDelay: number }>`
  position: absolute;
  height: ${thickness}px;
  width: 100%;
  background-color: ${colors.primary};
  left: 0;
  z-index: -1;

  bottom: 0;
  opacity: 0;
  animation-name:
    ${({ isSelected }) => isSelected ? changeBottom(0, -distance) : changeBottom(-distance, 0)},
    ${({ isSelected }) => isSelected ? changeOpacity(0, 1) : changeOpacity(1, 0)};
  animation-duration: ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (4 * TICK_DURATION)}ms;
  animation-timing-function: ${DEFAULT_EASING};
  animation-delay: ${({ isLoading, animationDelay }) => isLoading ? animationDelay : 0}ms;
  animation-fill-mode: forwards;
`;

const Filter = styled.div<{ isSelected: boolean, isLoading: boolean, animationDelay: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0;
  ${({ isSelected, isLoading, animationDelay }) => isSelected && css`
    animation:
      ${flicker}
      ${FLICKER_DURATION}ms
      ${DEFAULT_EASING}
      ${isLoading ? animationDelay : 0}ms
      infinite;
  `}
`;

export {
  ListItem,
  type ListItemProps,
};