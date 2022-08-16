import { Direction, HSL, Place, Point } from 'src/types';

function isSamePoint(p1: Point, p2: Point): boolean {
  return (p1.x === p2.x) && (p1.y === p2.y); 
}

function serializePoint({ x, y }: Point): string {
  return `(${x},${y})`;
}

function deserializePoint(str: string): Point {
  const [x, y] = str.slice(1, -1).split(',').map(e => +e);
  return { x, y };
}

function getMapPos(map: Place[][], path: string): Point | void {
  for (const [y, row] of map.entries()) {
    for (const [x, place] of row.entries()) {
      if (place.path === path) return { x, y };
    }
  }
}

function getAcronym(name: string): string {
  return name.split(/[\s-]+/)
    .map(s => s[0].toUpperCase())
    .join('');
}

function getHslString({ hue, saturation, lightness }: HSL): string {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function getHslObj(s: string): HSL {
  const hslRegex = /^hsl\((?<hue>\d+), (?<saturation>\d+)%, (?<lightness>\d+)%\)$/;
  const groups = s.match(hslRegex)!.groups;
  return {
    hue: +groups!.hue,
    saturation: +groups!.saturation,
    lightness: +groups!.lightness,
  };
}

function setHslLightness(hslStr: string, lightness: number): string {
  const hsl = getHslObj(hslStr);
  hsl.lightness = lightness;
  return getHslString(hsl);
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

export {
  isSamePoint,
  serializePoint,
  deserializePoint,
  getMapPos,
  getAcronym,
  getHslString,
  getHslObj,
  setHslLightness,
  keyDirectionMap,
}
