type Direction = 'Up' | 'Down' | 'Left' | 'Right' | 'Teleport';

interface Point {
  x: number;
  y: number;
}

interface Place {
  name: string;
  description: string;
  link?: string;
  imgName?: string;
  path: string;
}

interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

export {
  type Direction,
  type Point,
  type Place,
  type HSL,
}