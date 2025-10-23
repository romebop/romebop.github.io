import { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import linkSVG from 'src/assets/link.svg?react';
import githubSVG from 'src/assets/github.svg?react';
import { LoadingDots } from 'src/components';
import { colors } from 'src/util';

interface DisplayProps {
  img?: string;
  siteLink?: string;
  githubLink?: string;
}

const Display: FC<DisplayProps> = ({ img, siteLink, githubLink }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [img]);

  return (
    <Container>
      {!isLoaded && (
        <LoaderWrapper>
          <LoadingDots />
        </LoaderWrapper>
      )}
      {img && (
        <StyledImage
          src={img}
          onLoad={() => setIsLoaded(true)}
          isLoaded={isLoaded}
        />
      )}
      {(isLoaded && (siteLink || githubLink)) && (
        <>
          <HorizontalBar />
          <LinksContainer>
            {siteLink && (
              <StyledLink
                href={`https://${siteLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledIcon as={linkSVG} />
                {/* <span>-</span> */}
                <span className='text'>Website</span>
              </StyledLink>
            )}
            {githubLink && (
              <StyledLink
                href={`https://${githubLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledIcon as={githubSVG} />
                {/* <span>-</span> */}
                <span className='text'>GitHub</span>
              </StyledLink>
            )}
          </LinksContainer>
        </>
      )}
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
  padding: 48px;
  box-sizing: border-box;
`;

const LoaderWrapper = styled.div`
  opacity: 0.2;
`;

const StyledImage = styled.img<{ isLoaded: boolean }>`
  ${({ isLoaded }) => !isLoaded && 'display: none;'}
  width: 100%;
  max-height: 380px;
  object-fit: contain;
`;

const HorizontalBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.inactive};
  margin: 24px 0;
`;

const LinksContainer = styled.div`
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const StyledLink = styled.a`
  display: flex;
  color: ${colors.primary};
  text-decoration: none;

  &:hover .text {
    text-decoration: underline;
  }

  &:not(:first-child) {
    margin-top: 6px;
  }
`;

const StyledIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 4px;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

export {
  Display,
  type DisplayProps,
};