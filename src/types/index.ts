type Direction = 'Up' | 'Down' | 'Left' | 'Right';

interface Category {
  path: string;
  name: string;
  items: Item[];
}

interface Item {
  path: string;
  name: string;
  description: string;
  link?: string;
  compName?: string;
  imgName?: string;
}

interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

export {
  type Category,
  type Direction,
  type Item,
  type HSL,
}