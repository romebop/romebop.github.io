import { Place, Point } from 'src/types';

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

export function getMapPos(map: Place[][], path: string): Point | void {
  for (const [y, row] of map.entries()) {
    for (const [x, place] of row.entries()) {
      if (place.path === path) return { x, y };
    }
  }
}
