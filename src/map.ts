import Square from './assets/Square.svg?react';
import Circle from './assets/Circle.svg?react';
import X from './assets/X.svg?react';
import { Action, Category, Position } from './types';

const appCategory: Category = {
  path: 'app',
  name: 'Apps',
  shape: Square,
  description: "Here are some apps I've worked on",
  items: [
    {
      path: 'people-map',
      name: 'People Map',
      description: 'A social note taking app built using React. Users can write notes on cards representing persons, draw connections between them, and examine their broader social network represented as a D3.js Force-Directed Graph. Data is stored in localStorage.',
    },
    {
      path: 'backtime',
      name: 'BackTime',
      description: 'A full-stack web app that helps users automatically track online purchases, returns, and warranties.',
    },
    {
      path: 'whiteboard',
      name: 'Whiteboard',
      description: 'A collaborative drawing & chatting application built on Node.js. Users can draw on HTML <canvas> to other clients and chat by setting a username in real-time via Socket.IO. Data is persisted on MongoDB.',
    },
  ],
};

const visCategory: Category = {
  path: 'vis',
  name: 'Visuals',
  shape: Circle,
  description: 'Various and random visualizations I found interesting',
  items: [
    {
      path: 'game-of-life',
      name: 'Game of Life',
      description: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      path: 'perlin-noise',
      name: 'Perlin Noise',
      description: '5 Convallis tellus id interdum velit laoreet id donec ultrices tincidunt.',
    },
    {
      path: 'audio-visualizer',
      name: 'Audio Visualizer',
      description: '6 Malesuada bibendum arcu vitae elementum curabitur vitae.',
    },
    {
      path: 'college-unemployment',
      name: 'College Unemployment',
      description: '7 Viverra justo nec ultrices dui sapien eget mi proin.',
    },
    {
      path: 'campaign-finance',
      name: 'US Campaign Finance',
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
  shape: X,
  description: 'Combinating and recombinating sounds',
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