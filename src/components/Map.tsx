import { FC } from 'react';
import styled from 'styled-components';

import { Point, Place } from 'src/types';

const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Row = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export interface MapProps {
  map: Place[][];
  pos: Point;
  teleportPos: (pos: Point) => void;
}

const Map: FC<MapProps> = ({ map, pos, teleportPos }) => {  
  return (
    <RowsContainer>
      {map.map((row, y) =>
        <Row key={y}>
          {row.map((_, x) =>
            <InputWrapper key={x}>
              <input
                type='checkbox'
                checked={x === pos.x && y === pos.y}
                onChange={() => teleportPos({ x, y })}
              />
            </InputWrapper>
          )}
        </Row>
      )}
    </RowsContainer>
  );
};

export default Map;