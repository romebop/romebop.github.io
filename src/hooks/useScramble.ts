import { useEffect, useRef, RefObject } from 'react';

import { getRandomChar } from 'src/util';

interface UseScrambleProps {
  text: string;
  animationDelay?: number;
}

const useScramble = ({ text, animationDelay = 0 }: UseScrambleProps): RefObject<HTMLElement> => {

  const nodeRef = useRef<any>(null);
  const reqID = useRef<number>(0);
  const indexRef = useRef<number>(0);
  const stepsPerIndex = 2;
  const stepCountRef = useRef<number>(0);
  const elapsedRef = useRef(0);
  const fpsInterval = 1000 / 60;

  useEffect(() => {
    setTimeout(() => {
      reqID.current = requestAnimationFrame(animate);
    }, animationDelay);

    return () => {
      if (!reqID.current) return;
      cancelAnimationFrame(reqID.current);
    };
  }, []);

  const animate = (time: number) => {
    reqID.current = requestAnimationFrame(animate);

    const timeElapsed = time - elapsedRef.current;
    
    if (timeElapsed > fpsInterval) {
      elapsedRef.current = time;
    
      draw();
    }
  };

  const draw = () => {
    if (!nodeRef.current) return;

    if (stepCountRef.current === stepsPerIndex) {
      stepCountRef.current = 0;
      indexRef.current++;
    }

    if (indexRef.current < text.length) {
      const result = text.slice(0, indexRef.current) + getRandomChar(text.replace(/\s+/g, ''));
      nodeRef.current.innerHTML = result;
      stepCountRef.current++;
    } else {
      cancelAnimationFrame(reqID.current);
      nodeRef.current.innerHTML = text;
    }
  };

  return nodeRef;
};

export {
  useScramble,
  type UseScrambleProps,
};
