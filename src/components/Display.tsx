import { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: grid;
  place-content: center;
`;

interface DisplayProps {
  header: string;
  description?: string;
  imgName?: string;
}

const Display: FC<DisplayProps> = ({ header }) => {
  return (
    <Container>{header}</Container>
  );
};

export {
  Display,
  type DisplayProps,
};