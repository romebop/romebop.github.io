import { FC } from 'react';
import styled from 'styled-components/macro';

const Text = styled.div`
  margin-top: auto;
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Footer: FC = () => (
  <Text>© 2022 romebop.io</Text>
);

export default Footer;