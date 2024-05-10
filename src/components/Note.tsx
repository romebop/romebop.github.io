import { FC } from 'react';
import styled from 'styled-components/macro';

import { THICK_LINE_WIDTH, THIN_LINE_WIDTH, colors } from 'src/util';

interface NoteProps {
  text: string;
}

const Note: FC<NoteProps> = ({ text }) => {
  return (
    <Container>
      <Shadow />
      <SideLines>
        <ThickLine />
        <ThinLine />
      </SideLines>
      <Text>{text}</Text>
      <Block />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 48px;
  box-sizing: border-box;
`;

const Shadow = styled.div`
  background-color: ${colors.shadow};
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 4px;
  left: 4px;
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

const Text = styled.div``;

export {
  Note,
};
