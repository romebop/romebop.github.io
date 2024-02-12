import { FC, useEffect, useRef } from 'react';
import p5 from 'p5';
import styled from 'styled-components/macro';

import { useWindowDimensions  } from 'src/hooks';
import { colors } from 'src/util';

const CanvasWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
`;

const Background: FC = () => {

  const windowDimensions = useWindowDimensions();

  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const sketchFunction = (p: p5) => {

      const { width, height } = windowDimensions;
      const len = height;
      const circleOffset = len / 30;
      const lineOffset = len / 12;

      const worldAmp = circleOffset / 4;
      const miniAmp = circleOffset / 8;
      let deg = 0;

      p.setup = () => {
        p.createCanvas(width, height);
        p.stroke(colors.inactive);
        p.strokeWeight(3);
        p.fill('rgba(0, 0, 0, 0)');
        p.frameRate(120);
      };

      p.draw = () => {
        p.background(colors.background);

        p.translate(p.sin(deg) * worldAmp, -p.cos(deg) * worldAmp);

        // circles
        p.ellipse(0, 0, len, len);
        p.ellipse(
          0 + p.sin(deg) * miniAmp,
          0 - p.cos(deg) * miniAmp,
          len + circleOffset,
          len + circleOffset
        );

        // reflected circles
        p.ellipse(width, height, len, len);
        p.ellipse(
          width - p.cos(deg) * miniAmp,
          height + p.sin(deg) * miniAmp,
          len + circleOffset,
          len + circleOffset
        );


        // lines
        const slope = height / (width / 2);

        const leftYOffset = height / 18;
        const leftXOffset = leftYOffset / slope;
        p.line(
          0 - leftXOffset - lineOffset,
          0 - leftYOffset,
          (width / 2) - leftXOffset - lineOffset,
          height - leftYOffset
        ); // left

        const mainYOffset = height / 24;
        const mainXOffset = mainYOffset / slope;
        p.line(
          0 - mainXOffset + p.sin(deg) * miniAmp,
          0 - mainYOffset,
          (width / 2) - mainXOffset + p.sin(deg) * miniAmp,
          height - mainYOffset
        ); // main

        const rightYOffset = height / 6;
        const rightXOffset = rightYOffset / slope;
        p.line(
          0 - rightXOffset + lineOffset,
          0 - rightYOffset,
          (width / 2) - rightXOffset + lineOffset,
          height - rightYOffset
        ); // right


        // reflected lines
        p.line(
          width + rightXOffset - lineOffset,
          height + rightYOffset,
          (width / 2) + rightXOffset - lineOffset,
          0 + rightYOffset
        ); // left

        p.line(
          width + mainXOffset - p.cos(deg) * miniAmp,
          height + mainYOffset,
          (width / 2) + mainXOffset - p.cos(deg) * miniAmp,
          0 + mainYOffset,
        ); // main

        p.line(
          width + rightXOffset + lineOffset,
          height + rightYOffset,
          (width / 2) + rightXOffset + lineOffset,
          0 + rightYOffset
        ); // right

        deg += 0.01;

      };

    };

    const sketch = new p5(sketchFunction, canvasWrapperRef.current!);

    return () => {
      sketch.remove();
    };
  }, [windowDimensions]);

  return <CanvasWrapper ref={canvasWrapperRef}></CanvasWrapper>;
};

export { Background };
