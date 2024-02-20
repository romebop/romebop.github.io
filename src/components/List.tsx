import { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';

import { ListItem } from 'src/components'
import { colors } from 'src/util';
import { DEFAULT_EASING, TICK_DURATION } from 'src/util/constants';
import { expandHeight } from 'src/util/keyframes';

interface ListProps {
  items: string[];
  activeIdx: number;
  handleItemClick: (item: string) => () => void;
}

const List: FC<ListProps> = ({ items, activeIdx, handleItemClick }) => {
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
              text={item}
              isSelected={idx === activeIdx}
              handleClick={handleItemClick(item)}
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

const initialDelay = 8 * TICK_DURATION;
const expandDuration = 5 * TICK_DURATION;
const SideLines = styled.div`
  display: flex;
  margin-right: 41px;
  animation:
    ${expandHeight}
    ${expandDuration}ms
    ${DEFAULT_EASING}
    ${initialDelay}ms
    forwards;
`;

const ThickLine = styled.div`
  height: 100%;
  width: 14px;
  background-color: ${colors.inactive};
`;

const ThinLine = styled.div`
  height: 100%;
  width: 4px;
  margin-left: 6px;
  background-color: ${colors.inactive};
`;

const ItemsContainer = styled.div`
  & > *:not(:first-child) {
    margin-top: 34px;
  }
`;

const slideInItem = keyframes`
  from {
    left: -64px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
`;
const slideInDuration = 9 * TICK_DURATION;
const cascadeDelay = TICK_DURATION;
const ItemWrapper = styled.div<{ index: number }>`
  position: relative;
  opacity: 0;
  animation:
    ${slideInItem}
    ${slideInDuration}ms
    ${DEFAULT_EASING}
    ${({ index }) => initialDelay + expandDuration + TICK_DURATION + (index * cascadeDelay)}ms
    forwards;
`;

export {
  List,
  type ListProps,
};