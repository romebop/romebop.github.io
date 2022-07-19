export type Direction = 'Up' | 'Down' | 'Left' | 'Right';

export interface Point {
  x: number;
  y: number;
}

export interface Place {
  name: string;
  description: string;
  component?: JSX.Element;
}
