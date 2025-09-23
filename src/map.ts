import { ReactComponent as Circle } from './assets/Circle.svg';
import { ReactComponent as Square } from './assets/Square.svg';
import { ReactComponent as Triangle } from './assets/Triangle.svg';
import { Action, Category, Position } from './types';

const appCategory: Category = {
  path: 'app',
  name: 'Apps',
  shape: Circle,
  description: 'Application Category',
  items: [
    {
      path: 'item-1',
      name: 'Item 1',
      description: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      path: 'item-2',
      name: 'Item 2 Item 2',
      description: '2 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      path: 'item-3',
      name: 'Item 3 Item 3 Item 3',
      description: '3 Lorem ipsum dolor sit amet.',
    },
  ],
};

const visCategory: Category = {
  path: 'vis',
  name: 'Visuals',
  shape: Square,
  description: 'Visualization Category',
  items: [
    {
      path: 'item-4',
      name: 'Item 4',
      description: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      path: 'item-5',
      name: 'Item 5 Item 5',
      description: '5 Convallis tellus id interdum velit laoreet id donec ultrices tincidunt.',
    },
    {
      path: 'item-6',
      name: 'Item 6',
      description: '6 Malesuada bibendum arcu vitae elementum curabitur vitae.',
    },
    {
      path: 'item-7',
      name: 'Item 7 Item 7',
      description: '7 Viverra justo nec ultrices dui sapien eget mi proin.',
    },
    {
      path: 'item-8',
      name: 'Item 8',
      description: '8 Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.',
    },
    {
      path: 'item-9',
      name: 'Item 9 Item 9',
      description: '9 Sagittis vitae et leo duis ut diam quam nulla porttitor.',
    },
  ],
};

const soundCategory: Category = {
  path: 'sound',
  name: 'Sounds',
  shape: Triangle,
  description: 'Sound Category',
  items: [
    {
      path: 'item-10',
      name: 'Item 10 Item 10',
      description: '10 Vitae et leo duis ut diam quam nulla.',
    },
    {
      path: 'item-11',
      name: 'Item 11 Item 11',
      description: '11 Eget nunc lobortis mattis aliquam faucibus purus in massa.',
    },
    {
      path: 'item-12',
      name: 'Item 12 Item 12',
      description: '12 Magna fringilla urna porttitor rhoncus dolor purus non enim praesent.',
    },
    {
      path: 'item-13',
      name: 'Item 13 Item 13',
      description: '13 Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Volutpat sed cras ornare arcu dui.',
    },
  ],
};

const map: Category[] = [
  appCategory,
  visCategory,
  soundCategory,
];

function getNewPosition(
  { categoryIdx, itemIdx }: Position,
  action: Action,
): Position {
  if (action === 'Left' && itemIdx === -1 && categoryIdx > 0) {
    return { categoryIdx: categoryIdx - 1, itemIdx };
  }
  if (action === 'Right' && itemIdx === -1 && categoryIdx < map.length - 1) {
    return { categoryIdx: categoryIdx + 1, itemIdx };
  }
  if (action === 'Up' && itemIdx > -1) {
    return { categoryIdx, itemIdx: itemIdx - 1 };
  }
  if (action === 'Down' && itemIdx < map[categoryIdx].items.length - 1) {
    return { categoryIdx, itemIdx: itemIdx + 1 };
  }
  if (action === 'Enter' && itemIdx === -1) {
    return { categoryIdx, itemIdx: 0 };
  }
  if (action === 'Escape' && itemIdx > -1) {
    return { categoryIdx, itemIdx: -1 };
  }
  return { categoryIdx, itemIdx };
}

export default map;
export {
  getNewPosition,
};