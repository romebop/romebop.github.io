import { FC, useEffect, useRef } from 'react';
import p5 from 'p5';
import styled from 'styled-components/macro';

const CanvasWrapper = styled.div`
  margin: auto 0;
`;

const CoolThing: FC = () => {

  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const sketchFunction = (p: p5) => {

      const width = 800;
      const height = 800;
      const cols = 16;
      const rows = 16;
      const cellWidth = width / cols;
      const cellHeight = height / rows;
      const strokeWidth = 2;
      let xOff = 0;
      let yOff = 0;
      let zOff = 0;
      const xyInc = 0.25; // how fine is the detail (higher is zoom out)
      const zInc = 0.0003; // how fast does it change (higher is more rapid)

      p.setup = () => {
        p.createCanvas(width + strokeWidth, height + strokeWidth);
        p.frameRate(100);
      };

      const drawGrid = () => {
        for (let i = 0; i <= cols; i++) {
          const x = i * cellWidth + 1;
          p.line(x, 0, x, p.height);
        }
        for (let j = 0; j <= rows; j++) {
          const y = j * cellHeight + 1;
          p.line(0, y, p.width, y);
        }
      };

      p.draw = () => {
        
        console.log('drawing now');

        p.background(0);
        p.strokeWeight(strokeWidth);
        p.strokeCap(p.SQUARE);
        p.stroke('white');
        p.noFill();

        drawGrid();

        xOff = 0;
        for (let i = 0; i < rows; i++) { // height
          yOff = 0;
          for (let j = 0; j < cols; j++) { // width
            const noiseVal = p.noise(xOff, yOff, zOff);
            const powVal = p.pow(noiseVal, 3);
            const mappedVal = p.map(powVal, 0, 1, 0, 80, true);
            // const roundedVal = p.round(mappedVal);

            // const x = cellWidth * j + cellWidth / 2;
            // const y = cellHeight * i + cellHeight / 2;

            // text
            // p.textAlign(p.CENTER, p.CENTER);
            // p.strokeWeight(0.5);
            // p.textSize(4 + (roundedVal * 6));
            // p.fill('white');
            // p.text(roundedVal, x,  y);

            // circle
            // p.fill('white');
            // p.ellipse(x, y, mappedVal);

            console.log(mappedVal);

            if (10 < mappedVal && mappedVal <= 14) { // line
              p.line(
                strokeWidth + (cellWidth * j),
                (strokeWidth / 2) + (cellHeight * i) + (cellHeight / 2),
                (cellWidth * j) + cellWidth,
                (strokeWidth / 2) + (cellHeight * i) + (cellHeight / 2)
              );
            }
            if (14 < mappedVal && mappedVal <= 18) { // circle
              const circleX = (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 2);
              const circleY = (strokeWidth / 2) + (cellHeight * i) + (cellHeight / 2);
              const radius = Math.min(cellWidth, cellHeight) / 2 - (strokeWidth * 2);
              p.ellipse(circleX, circleY, radius * 2);
            }
            if (18 < mappedVal && mappedVal <= 22) { // x
              p.line(
                (strokeWidth / 2) + (cellWidth * j),
                (strokeWidth / 2) + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + cellWidth,
                (strokeWidth / 2) + (cellHeight * i) + cellHeight
              );
              p.line(
                (strokeWidth / 2) + (cellWidth * j),
                (strokeWidth / 2) + (cellHeight * i) + cellHeight,
                (strokeWidth / 2) + (cellWidth * j) + cellWidth,
                (strokeWidth / 2) + (cellHeight * i)
              );
            }
            if (22 < mappedVal && mappedVal <= 26) { // tic-tac-toe
              p.line(
                strokeWidth + (cellWidth * j),
                (strokeWidth / 2) + (cellHeight * i) + (cellHeight / 3),
                (cellWidth * j) + cellWidth,
                (strokeWidth / 2) + (cellHeight * i) + (cellHeight / 3)
              );
              p.line(
                strokeWidth + (cellWidth * j),
                (strokeWidth / 2) + (cellHeight * i) + (cellHeight / 3 * 2),
                (cellWidth * j) + cellWidth,
                (strokeWidth / 2) + (cellHeight * i) + (cellHeight / 3 * 2)
              );
              p.line(
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 3),
                strokeWidth + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 3),
                (cellHeight * i) + cellHeight
              );
              p.line(
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 3 * 2),
                strokeWidth + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 3 * 2),
                (cellHeight * i) + cellHeight
              );
            }
            if (26 < mappedVal) { // stripes
              p.line(
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9),
                strokeWidth + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9),
                (cellHeight * i) + cellHeight
              );
              p.line(
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 2),
                strokeWidth + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 2),
                (cellHeight * i) + cellHeight
              );
              p.line(
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 3),
                strokeWidth + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 3),
                (cellHeight * i) + cellHeight
              );
              p.line(
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 4),
                strokeWidth + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 4),
                (cellHeight * i) + cellHeight
              );
              p.line(
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 5),
                strokeWidth + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 5),
                (cellHeight * i) + cellHeight
              );
              p.line(
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 6),
                strokeWidth + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 6),
                (cellHeight * i) + cellHeight
              );
              p.line(
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 7),
                strokeWidth + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 7),
                (cellHeight * i) + cellHeight
              );
              p.line(
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 8),
                strokeWidth + (cellHeight * i),
                (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 9 * 8),
                (cellHeight * i) + cellHeight
              );
            }
            yOff += xyInc;
          }
          xOff += xyInc;
          zOff += zInc;
        }
      };
      
    };

    const sketch = new p5(sketchFunction, canvasWrapperRef.current!);

    return () => {
      sketch.remove();
    };
  }, []);

  return <CanvasWrapper ref={canvasWrapperRef}></CanvasWrapper>;
};

export { CoolThing };
