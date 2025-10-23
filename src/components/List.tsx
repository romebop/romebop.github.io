import { ComponentType, SVGProps, FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { ListItem } from 'src/components'
import {
  CASCADE_DELAY,
  DEFAULT_EASING,
  INITIAL_DELAY,
  INIT_DURATION,
  SLIDE_IN_DURATION,
  THICK_LINE_WIDTH,
  THIN_LINE_WIDTH,
  TICK_DURATION,
  scaleHeight,
  colors
} from 'src/util';

interface ListProps {
  Marker: ComponentType<SVGProps<SVGSVGElement>>;
  items: string[];
  activeIdx: number;
  handleItemClick: (item: string) => () => void;
}

const List: FC<ListProps> = ({ Marker, items, activeIdx, handleItemClick }) => {

  const baseAnimationDelay = INITIAL_DELAY + INIT_DURATION + TICK_DURATION;
  
  return (
    <Container>
      <SideLines>
        <ThickLine />
        <ThinLine />
      </SideLines>
      <ItemsContainer>
        {items.map((item, idx) =>
          <ItemWrapper
            key={item}
            index={idx}
          >
            <ListItem
              Marker={Marker}
              text={item}
              isSelected={idx === activeIdx}
              handleClick={handleItemClick(item)}
              animationDelay={baseAnimationDelay + (idx * CASCADE_DELAY) + (TICK_DURATION * 2)}
              scrambleOffset={SLIDE_IN_DURATION}
            />
          </ItemWrapper>
        )}
      </ItemsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SideLines = styled.div`
  display: flex;
  margin-right: 26px;
  height: 100%;
  transform: scaleY(0);
  animation:
    ${scaleHeight(0, 1)}
    ${INIT_DURATION}ms
    ${DEFAULT_EASING}
    ${INITIAL_DELAY}ms
    forwards;
`;

const ThickLine = styled.div`
  height: 100%;
  width: ${THICK_LINE_WIDTH}px;
  background-color: ${colors.inactive};
`;

const ThinLine = styled.div`
  height: 100%;
  width: ${THIN_LINE_WIDTH}px;
  margin-left: 4px;
  background-color: ${colors.inactive};
`;

const ItemsContainer = styled.div`
  & > *:not(:first-child) {
    margin-top: 26px;
  }
`;

const slideInItem = keyframes`
  from {
    transform: translateX(-53px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const ItemWrapper = styled.div<{ index: number }>`
  position: relative;
  opacity: 0;
  animation:
    ${slideInItem}
    ${SLIDE_IN_DURATION}ms
    ${'ease-out'}
    ${({ index }) => INITIAL_DELAY + INIT_DURATION + TICK_DURATION + (index * CASCADE_DELAY)}ms
    forwards;
`;

export {
  List,
  type ListProps,
};