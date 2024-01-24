import { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 300px;
  background-color: pink;
  &:not(:first-child) {
    margin-top: 40px;
  }
`;

const SelectionFill = styled.div`
`;

interface SelectItemProps {
  text: string;
  isSelected: boolean;
}

const SelectItem: FC<SelectItemProps> = ({ text }) => {
  return (
    <Container>
      <SelectionFill />
      {text}
    </Container>
  );
};

export {
  SelectItem,
  type SelectItemProps,
};