import { Direction } from 'src/types';

export * from './colors';

export function getAcronym(name: string): string {
  return name.split(/[\s-]+/)
    .map(s => s[0].toUpperCase())
    .join('');
}

export const keyDirectionMap: Record<string, Direction> = {
  ArrowUp: 'Up',
  ArrowDown: 'Down',
  ArrowLeft: 'Left',
  ArrowRight: 'Right',
  w: 'Up',
  s: 'Down',
  a: 'Left',
  d: 'Right',
};

export const tickDuration = 1000 / 45;
