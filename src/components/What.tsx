import { FC } from 'react';
import styled from 'styled-components/macro';

import { SelectItem } from 'src/components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
`;

const What: FC = () => {  

  return (
    <Container>
      <SelectItem text={'test one'} isSelected={false} />
      <SelectItem text={'test two'} isSelected={false} />
      <SelectItem text={'test three'} isSelected={false} />
    </Container>
  );
};

export {
  What,
};