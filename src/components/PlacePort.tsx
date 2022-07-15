import { useEffect, useState, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const placeInEffect = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const placeOutEffect = keyframes`
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const Thing = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #0095ff;
  width: 500px;
  height: 500px;
  animation: ${props => props.show ? placeInEffect : placeOutEffect} 500ms ease-out;
  animation-fill-mode: forwards;
`;

const PlacePort = ({ show, children }: { show: boolean, children: ReactNode}) => {

  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };
  
  return (
    shouldRender
      ? (
          <Thing
            show={show}
            onAnimationEnd={onAnimationEnd}
          >
            {children}
          </Thing>
        )
      : <></>
  );
};

export default PlacePort;