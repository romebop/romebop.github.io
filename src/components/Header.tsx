import { FC } from 'react';
import styled from 'styled-components/macro';

import { useScramble } from 'src/hooks';
import { colors } from 'src/util';

const Container = styled.div`
  font-size: 58px;
  color: ${colors.primary};
  text-shadow: 8px 8px ${colors.inactive};
  letter-spacing: 4px;
  text-transform: uppercase;
`;

interface HeaderProps {
  text: string;
  animationDelay?: number;
}

const Header: FC<HeaderProps> = ({ text, animationDelay = 0 }) => {

const ref = useScramble({ text, animationDelay }) as any;
    
  return (
    <Container {...{ ref }} />
  );
};

export {
  Header,
  type HeaderProps,
};