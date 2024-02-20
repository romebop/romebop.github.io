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

interface Position {
  categoryIdx: number;
  itemIdx: number;
}

type Direction = 'Up' | 'Down' | 'Left' | 'Right';

type Action = Direction | 'Enter' | 'Escape';

interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

export {
  type Action,
  type Category,
  type Direction,
  type Item,
  type HSL,
  type Position,
}