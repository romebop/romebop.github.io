import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Point, Place } from 'src/types';
import { serializePoint } from 'src/util';

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
  /* width: 250px; */
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export interface MapAreaProps {
  map: Place[][];
  pos: Point;
  teleportPos: (pos: Point) => void;
}

const MapArea: FC<MapAreaProps> = ({ map, pos, teleportPos }) => {  
  console.log('@@@ map area rendered:');
  console.log(pos);
  return (
    <RowsContainer>
      {map.map((row, y) =>
        <Row key={y}>
          {row.map((place, x) =>
            <InputWrapper key={x}>
              <Link to={place.path}>
                {/* <label htmlFor={place.name}>{serializePoint({ x, y })} === {serializePoint(pos)}</label> */}
                <input
                  name={place.name}
                  type='checkbox'
                  checked={(x === pos.x) && (y === pos.y)}
                  onChange={() => teleportPos({ x, y })}
                />
              </Link>
            </InputWrapper>
          )}
        </Row>
      )}
    </RowsContainer>
  );
};

export default MapArea;