import { Direction, HSL, Place, Point } from 'src/types';

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

export function getAcronym(name: string): string {
  return name.split(/[\s-]+/)
    .map(s => s[0].toUpperCase())
    .join('');
}

export function getHslString({ hue, saturation, lightness }: HSL): string {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export function getHslType(s: string): HSL {
  const hslRegex = /^hsl\((?<hue>\d+), (?<saturation>\d+)%, (?<lightness>\d+)%\)$/;
  const groups = s.match(hslRegex)!.groups;
  return {
    hue: +groups!.hue,
    saturation: +groups!.saturation,
    lightness: +groups!.lightness,
  };
}

export function setHslLightness(hslStr: string, lightness: number): string {
  const hsl = getHslType(hslStr);
  hsl.lightness = lightness;
  return getHslString(hsl);
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