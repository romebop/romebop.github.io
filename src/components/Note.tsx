import { FC, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

import {
  DEFAULT_EASING,
  INIT_DURATION,
  THICK_LINE_WIDTH,
  THIN_LINE_WIDTH,
  colors,
} from 'src/util';

interface NoteProps {
  children: ReactNode;
}

const Note: FC<NoteProps> = ({ children }) => {
  return (
    <Container>
      <Shadow />
      <SideLines>
        <ThickLine />
        <ThinLine />
      </SideLines>
      {children}
      <Block />
    </Container>
  );
};

const NOTE_TEXT_PADDING = 48;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 ${NOTE_TEXT_PADDING}px;
  box-sizing: border-box;
`;

const moveShadow = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(4px, 4px);
  }
`;

const Shadow = styled.div`
  background-color: ${colors.shadow};
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  animation:
    ${moveShadow}
    ${INIT_DURATION}ms
    ${DEFAULT_EASING}
    ${INIT_DURATION * 1.6}ms
    forwards
`;

const SideLines = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  height: 100%;
  opacity: 0.6;
`;

const ThickLine = styled.div`
  height: 100%;
  width: ${THICK_LINE_WIDTH}px;
  background-color: ${colors.primary};
`;

const ThinLine = styled.div`
  height: 100%;
  width: ${THIN_LINE_WIDTH}px;
  margin-left: 6px;
  background-color: ${colors.primary};
`;

const Block = styled.div`
  width: 14px;
  height: 14px;
  position: absolute;
  right: 12px;
  bottom: 8px;
  background-color: ${colors.primary};
`;

export {
  Note,
  NOTE_TEXT_PADDING,
};
