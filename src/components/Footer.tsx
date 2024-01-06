import { FC } from 'react';
import styled from 'styled-components/macro';

const Text = styled.div`
  color: hsl(0,0%,100%);
  opacity: 0.9;
  font-size: 14px;
  font-weight: 500;
`;

const Footer: FC = () => (
  <Text>© 2024 romebop.io</Text>
);

export { Footer };
