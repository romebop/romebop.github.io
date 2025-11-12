import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Text = styled.div`
  color: hsl(0, 0%, 0%);
  opacity: 0.25;
  font-size: 14px;
  font-weight: 500;

  FooterWrapperFooterWrapper
`;

const Footer: FC = () => (
  <Wrapper>
    <Text>© 2025-present romebop.io</Text>
  </Wrapper>
);

export {
  Footer,
};