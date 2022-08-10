import { FC } from 'react';
import styled from 'styled-components/macro';

const Text = styled.div`
  color: hsla(0, 0%, 100%, 0.9);
  font-size: 12px;
  font-weight: 500;
`;

const Footer: FC = () => (
  <Text>© 2022 romebop.io</Text>
);

export default Footer;