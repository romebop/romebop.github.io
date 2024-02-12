import { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';

import { SelectItem } from 'src/components'
import { Item } from 'src/types';
import { colors, tickDuration } from 'src/util';

interface SelectListProps {
  items: Item[];
  activeIdx: number;
}

// TODO: decouple
const SelectList: FC<SelectListProps> = ({ items, activeIdx }) => {
  return (
    <Container>
      <SideLines>
        <ThickLine />
        <ThinLine />
      </SideLines>
      <SelectItemsContainer>
        {items.map((item, idx) =>
          <SelectItemWrapper
            key={item.name}
            index={idx}
          >
            <SelectItem
              text={item.name}
              isSelected={idx === activeIdx}
              clickHandler={() => alert(`GO TO ${item.path}`)}
            />
          </SelectItemWrapper>
        )}
      </SelectItemsContainer>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  align-items: center;
`;

const easingFunction = 'ease-in-out';
const expandSideLines = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;
const initialDelay = 8 * tickDuration;
const expandDuration = 5 * tickDuration;
const SideLines = styled.div`
  display: flex;
  margin-right: 41px;
  animation:
    ${expandSideLines}
    ${expandDuration}ms
    ${easingFunction}
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

const SelectItemsContainer = styled.div`
  & > *:not(:first-child) {
    margin-top: 34px;
  }
`;

const slideInSelectItem = keyframes`
  from {
    left: -64px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
`;
const slideInDuration = 9 * tickDuration;
const cascadeDelay = tickDuration;
const SelectItemWrapper = styled.div<{ index: number }>`
  position: relative;
  opacity: 0;
  animation:
    ${slideInSelectItem}
    ${slideInDuration}ms
    ${easingFunction}
    ${({ index }) => initialDelay + expandDuration + tickDuration + (index * cascadeDelay)}ms
    forwards;
`;

export {
  SelectList,
};