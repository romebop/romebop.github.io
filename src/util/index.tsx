import { Point } from 'src/types';

export function isSamePoint(p1: Point, p2: Point): boolean {
  return (p1.x === p2.x) && (p1.y === p2.y); 
}

export function serializePoint({ x, y }: Point): string {
  return `(${x},${y})`;
}

export function deserializePoint(str: string): Point {
  const [x, y] = str.slice(1, -1).split(',').map(e => +e);
  return { x, y };
}
