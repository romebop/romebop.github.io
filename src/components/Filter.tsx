import { FC } from 'react';
import styled from 'styled-components/macro';

const StyledFilter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 7px 7px;
  background-image:
    linear-gradient(to right,rgba(0,0,0,0.01) 3px, transparent 2px),
    linear-gradient(to bottom,rgba(0,0,0,0.01) 3px, transparent 2px);
  pointer-events: none;
`;

const Filter: FC = () => <StyledFilter />;

export {
  Filter,
};
