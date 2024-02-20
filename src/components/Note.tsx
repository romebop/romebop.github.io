import { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  display: grid;
  place-content: center;
`;

const Note: FC = () => {
  return (
    <Container>Hello I am Note</Container>
  );
};

export {
  Note,
};
