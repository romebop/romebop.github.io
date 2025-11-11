import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import githubSVG from 'src/assets/github.svg?react';
import linkSVG from 'src/assets/link.svg?react';
import { LoadingDots, Shadow } from 'src/components';
import {
  BAR_FONT_SIZE,
  BAR_HEIGHT,
  colors,
} from 'src/util';

interface DisplayProps {
  headerText: string;
  video?: string;
  githubLink?: string;
  siteLink?: string;
}

const Display: FC<DisplayProps> = ({ headerText, video, githubLink, siteLink }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [video]);

  return (
    <Container>
      <Shadow />
      <Header>
        <HeaderText>{headerText}</HeaderText>
        <LinksContainer>
          {githubLink && (
            <StyledLink
              href={`https://${githubLink}`}
              target='_blank'
              rel='noopener noreferrer'
              title='GitHub'
            >
              <StyledIcon as={githubSVG} />
            </StyledLink>
          )}
          {siteLink && (
            <StyledLink
              href={`https://${siteLink}`}
              target='_blank'
              rel='noopener noreferrer'
              title='Website'
            >
              <StyledIcon as={linkSVG} />
            </StyledLink>
          )}
        </LinksContainer>
      </Header>
      <Content>
        {!isLoaded && (
          <LoaderWrapper>
            <LoadingDots />
          </LoaderWrapper>
        )}
        {video && (
          <StyledVideo
            src={video}
            onLoadedData={() => setIsLoaded(true)}
            isLoaded={isLoaded}
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Header = styled.div`
  width: 100%;
  height: ${BAR_HEIGHT}px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  box-sizing: border-box;
`;

const HeaderText = styled.div`
  color: ${colors.white};
  font-size: ${BAR_FONT_SIZE}px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const StyledLink = styled.a`
  display: inline-flex;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const StyledIcon = styled.div`
  color: ${colors.white};
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoaderWrapper = styled.div`
  opacity: 0.2;
`;

const StyledVideo = styled.video<{ isLoaded: boolean }>`
  ${({ isLoaded }) => !isLoaded && 'display: none;'}
  max-height: 380px;
  object-fit: contain;
  border-radius: 4px;
`;

export {
  Display,
  type DisplayProps,
};