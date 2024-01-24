import { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
`;

interface DisplayProps {
  bobo: string;
}

const Display: FC<DisplayProps> = () => {

  return (
    <Container>

    </Container>
  );
};

export {
  Display,
  type DisplayProps,
};