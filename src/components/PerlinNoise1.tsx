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
      const xyInc = 0.14; // how fine is the detail (higher is zoom out)
      const zInc = 0.0003; // how fast does it change (higher is more rapid)
      const exp = 4; // how blobby (higher is more blobby)

      let start = 0;
      const startInc = 0.001;

      p.setup = () => {
        p.createCanvas(width + strokeWidth, height + strokeWidth);
        p.strokeWeight(strokeWidth);
        p.strokeCap(p.SQUARE);
        p.stroke('white');
        p.noFill();
        p.frameRate(120);
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

      const drawShapes = () => {
        xOff = start;
        for (let i = 0; i < rows; i++) { // height
          yOff = -start;
          for (let j = 0; j < cols; j++) { // width
            const noiseVal = p.noise(xOff, yOff, zOff);
            const powVal = p.pow(noiseVal, exp);
            // const roundedVal = powVal.toFixed(3);

            // const x = cellWidth * j + cellWidth / 2;
            // const y = cellHeight * i + cellHeight / 2;

            // text
            // p.textAlign(p.CENTER, p.CENTER);
            // p.strokeWeight(0.5);
            // p.textSize(16);
            // p.fill('white');
            // p.text(roundedVal, x,  y);

            // circle
            // p.fill('white');
            // p.ellipse(x, y, powVal * 200);

            const bp1 = 0.10;
            const bp2 = 0.12;
            const bp3 = 0.14;
            const bp4 = 0.18;
            const bp5 = 0.22;
            if (bp1 < powVal && powVal <= bp2) { // line
              p.line(
                strokeWidth + (cellWidth * j),
                (strokeWidth / 2) + (cellHeight * i) + (cellHeight / 2),
                (cellWidth * j) + cellWidth,
                (strokeWidth / 2) + (cellHeight * i) + (cellHeight / 2)
              );
            }
            if (bp2 < powVal && powVal <= bp3) { // circle
              const circleX = (strokeWidth / 2) + (cellWidth * j) + (cellWidth / 2);
              const circleY = (strokeWidth / 2) + (cellHeight * i) + (cellHeight / 2);
              const radius = Math.min(cellWidth, cellHeight) / 2 - (strokeWidth * 2);
              p.ellipse(circleX, circleY, radius * 2);
            }
            if (bp3 < powVal && powVal <= bp4) { // x
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
            if (bp4 < powVal && powVal <= bp5) { // tic-tac-toe
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
            if (bp5 < powVal) { // stripes
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
        start += startInc;
      }

      p.draw = () => {
        p.background(0);
        drawGrid();
        drawShapes();
      };
      
    };

    const sketch = new p5(sketchFunction, canvasWrapperRef.current!);

    return () => {
      sketch.remove();
    };
  }, []);

  return <CanvasWrapper ref={canvasWrapperRef}></CanvasWrapper>;
};

export {
  CoolThing
};
