import { Direction } from 'src/types';

export * from './colors';

function getAcronym(name: string): string {
  return name.split(/[\s-]+/)
    .map(s => s[0].toUpperCase())
    .join('');
}

const keyDirectionMap: Record<string, Direction> = {
  ArrowUp: 'Up',
  ArrowDown: 'Down',
  ArrowLeft: 'Left',
  ArrowRight: 'Right',
  w: 'Up',
  s: 'Down',
  a: 'Left',
  d: 'Right',
};

const getRandomIdx = (minIdx: number, maxIdx: number): number => {
  return minIdx + Math.floor(Math.random() * (maxIdx - minIdx));
};

const getRandomChar = (str: string): string => {
  return str[getRandomIdx(0, str.length)];
};

export {
  getAcronym,
  keyDirectionMap,
  getRandomIdx,
  getRandomChar,
};
