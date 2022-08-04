import { FC } from 'react';
import styled from 'styled-components/macro';

const Text = styled.div`
  color: hsl(0, 0%, 100%);
  font-size: 12px;
`;

const Footer: FC = () => (
  <Text>© 2022 romebop.io</Text>
);

export default Footer;