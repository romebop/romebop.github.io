import {
  ComponentType,
  SVGProps,
  FC,
  useEffect,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import PointerSVG from 'src/assets/Cursor.svg?react';
import { useScramble } from 'src/hooks';
import {
  DEFAULT_EASING,
  FILL_BAR_DURATION,
  FILL_BAR_EASING,
  FLICKER_DURATION,
  TICK_DURATION,
  colors,
  flicker,
} from 'src/util';

interface ListItemProps {
  Marker: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  isSelected: boolean;
  handleClick: () => void;
  animationDelay?: number;
  scrambleOffset?: number;
}

const ListItem: FC<ListItemProps> = ({
    Marker,
    text,
    isSelected,
    handleClick,
    animationDelay = 0,
    scrambleOffset = 0,
  }) => {

  const [isLoading, setIsLoading] = useState<boolean>(animationDelay > 0);
  const [internalIsSelected, setInternalIsSelected] = useState<boolean>(false)

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsLoading(false);
    }, animationDelay);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [animationDelay]);

  useEffect(() => {
    if (!isLoading) {
      setInternalIsSelected(isSelected);
    }
  }, [isLoading, isSelected]);

  const ref = useScramble({ text, animationDelay: animationDelay + scrambleOffset }) as any;

  return (
    <Container onClick={handleClick}>
      <StyledPointerSVG isSelected={internalIsSelected} />
      <Shadow isSelected={internalIsSelected} />
      <TopLine isSelected={internalIsSelected} />
      <BottomLine isSelected={internalIsSelected} />
      <FillBar isSelected={internalIsSelected} />
      {/* <ContentSquare isSelected={internalIsSelected} /> */}
      <StyledMarker as={Marker} isSelected={internalIsSelected} />
      <Text {...{ ref }} isSelected={internalIsSelected} />
      <Filter isSelected={internalIsSelected} />
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

const StyledPointerSVG = styled(({ isSelected, ...props }) => (
  <PointerSVG {...props} />
))<{ isSelected: boolean }>`
  position: absolute;
  left: -60px;
  width: 40px;
  height: 28px;
  color: ${colors.primary};
  pointer-events: none;

  opacity: ${({ isSelected }) => isSelected ? 1 : 0};
  transition:
    opacity
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (4 * TICK_DURATION)}ms
    ${DEFAULT_EASING}
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
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (4 * TICK_DURATION)}ms
    ${DEFAULT_EASING};
`;

const FillBar = styled.div<{ isSelected: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
  z-index: 0;

  transform: scaleX(${({ isSelected }) => isSelected ? 1 : 0});
  transform-origin: left;
  transition:
    transform
    ${({ isSelected }) => isSelected ? FILL_BAR_DURATION : (5 * TICK_DURATION)}ms
    ${FILL_BAR_EASING};
`;

const markerLength = 16;
const StyledMarker = styled.svg<{ isSelected: boolean }>`
  width: ${markerLength}px;
  height: ${markerLength}px;
  z-index: 1;

  color: ${({ isSelected }) => isSelected ? colors.white : colors.primary};
  transition:
    fill
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (2 * TICK_DURATION)}ms
    ${DEFAULT_EASING};
`;

const contentSquareLength = 26;
const ContentSquare = styled.div<{ isSelected: boolean }>`
  width: ${contentSquareLength}px;
  height: ${contentSquareLength}px;
  z-index: 1;

  background-color: ${({ isSelected }) => isSelected ? colors.white : colors.primary};
  transition:
    background-color
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (2 * TICK_DURATION)}ms
    ${DEFAULT_EASING};
`;

const Text = styled.div<{ isSelected: boolean }>`
  margin-left: 10px;
  height: ${length}px;
  display: flex;
  align-items: center;
  font-size: 18px;
  user-select: none;
  letter-spacing: 0.8px;
  z-index: 1;

  color: ${({ isSelected }) => isSelected ? colors.white : colors.primary};
  transition:
    color
    ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (2 * TICK_DURATION)}ms
    ${DEFAULT_EASING};
`;

const distance = 7;
const thickness = 3;
const TopLine = styled.div<{ isSelected: boolean }>`
  position: absolute;
  top: 0;
  height: ${thickness}px;
  width: 100%;
  background-color: ${colors.primary};
  left: 0;
  z-index: -1;

  transform: translateY(${({ isSelected }) => isSelected ? -distance : 0}px);
  opacity: ${({ isSelected }) => isSelected ? 1 : 0};
  transition-property: transform, opacity;
  transition-duration: ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (4 * TICK_DURATION)}ms;
  transition-timing-function: ${DEFAULT_EASING};
`;

const BottomLine = styled.div<{ isSelected: boolean }>`
  position: absolute;
  bottom: 0;
  height: ${thickness}px;
  width: 100%;
  background-color: ${colors.primary};
  left: 0;
  z-index: -1;

  transform: translateY(${({ isSelected }) => isSelected ? distance : 0}px);
  opacity: ${({ isSelected }) => isSelected ? 1 : 0};
  transition-property: transform, opacity;
  transition-duration: ${({ isSelected }) => isSelected ? (5 * TICK_DURATION) : (4 * TICK_DURATION)}ms;
  transition-timing-function: ${DEFAULT_EASING};
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
    animation:
      ${flicker}
      ${FLICKER_DURATION}ms
      ${DEFAULT_EASING}
      infinite;
  `}
`;

export {
  ListItem,
  type ListItemProps,
};