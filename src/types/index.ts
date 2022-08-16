export type Direction = 'Up' | 'Down' | 'Left' | 'Right' | 'Teleport';

export interface Point {
  x: number;
  y: number;
}

export interface Place {
  name: string;
  description: string;
  link?: string;
  imgName?: string;
  path: string;
}

export interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}