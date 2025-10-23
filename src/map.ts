import Square from 'src/assets/Square.svg?react';
import Circle from 'src/assets/Circle.svg?react';
import X from 'src/assets/X.svg?react';

import backTimeGif from 'src/assets/backtime.gif';
import peopleMapGif from 'src/assets/people-map.gif';
import whiteboardGif from 'src/assets/whiteboard.gif';

import gameOfLifeGif from 'src/assets/game-of-life.gif';
import perlinNoiseGif from 'src/assets/perlin-noise.gif';
import audioVizGif from 'src/assets/audio-viz.gif';
import yelpVisGif from 'src/assets/yelp-vis.gif';
import collegeUnemploymentGif from 'src/assets/college-unemployment.gif';
import campaignFinanceGif from 'src/assets/campaign-finance.gif';

import { Action, Category, Position } from 'src/types';

const appCategory: Category = {
  path: 'app',
  name: 'Apps',
  shape: Square,
  description: "Here are some apps I've worked / am working on:",
  items: [
    {
      path: 'backtime',
      name: 'Back Time',
      description: 'A full-stack web app that helps users automatically track online purchases, returns, and warranties.',
      img: backTimeGif,
      siteLink: 'backtime.onrender.com',
      githubLink: 'github.com/romebop/backtime',
    },
    {
      path: 'people-map',
      name: 'People Map',
      description: 'A social note taking app built using React. Users can write notes on cards representing persons, draw connections between them, and examine their broader social network represented as a D3.js Force-Directed Graph. Data is stored in localStorage.',
      img: peopleMapGif,
      siteLink: 'peoplemap.romebop.io',
      githubLink: 'github.com/romebop/people-map',
    },
    {
      path: 'whiteboard',
      name: 'Whiteboard',
      description: 'A collaborative drawing & chatting application built on Node.js. Users can draw on HTML <canvas> to other clients and chat by setting a username in real-time via Socket.IO. Data is persisted on MongoDB.',
      img: whiteboardGif,
      siteLink: 'whiteboard.romebop.io',
      githubLink: 'github.com/romebop/whiteboard',
    },
  ],
};

const visCategory: Category = {
  path: 'vis',
  name: 'Visuals',
  shape: Circle,
  description: 'Various and random visualizations I found interesting:',
  items: [
    {
      path: 'game-of-life',
      name: 'Game of Life',
      description: "Conway's game of life on HTML Canvas with various initial states.",
      img: gameOfLifeGif,
      siteLink: 'life.romebop.io',
      githubLink: 'github.com/romebop/game-of-life',
    },
    {
      path: 'perlin-noise',
      name: 'Perlin Noise',
      description: 'Perlin Noise visualization on HTML Canvas via varying shapes (densities).',
      img: perlinNoiseGif,
      siteLink: 'romebop.io/perlin-noise',
      githubLink: 'github.com/romebop/perlin-noise',
    },
    {
      path: 'audio-visualizer',
      name: 'Audio Visualizer',
      description: 'Visualize audio using Web Audio API and Three.js.',
      img: audioVizGif,
      siteLink: 'romebop.io/audio-viz',
      githubLink: 'github.com/romebop/audio-viz',
    },
    {
      path: 'yelp-dataset',
      name: 'Yelp Dataset Challenge',
      description: 'SVG dots rendered on top of Las Vegas via Mapbox GL JS.',
      img: yelpVisGif,
      siteLink: 'romebop.io/yelp-vis',
      githubLink: 'romebop/yelp-vis',
    },
    {
      path: 'college-unemployment',
      name: 'College Unemployment',
      description: 'Assortments of college majors and their unemployment rates.',
      img: collegeUnemploymentGif,
      siteLink: 'romebop.io/college-unemployment-vis',
      githubLink: 'github.com/romebop/college-unemployment-vis',
    },
    {
      path: 'campaign-finance',
      name: 'US Campaign Finance',
      description: 'Interactive bar chart of U.S. campaign contributions per State from Federal Elections Commission data.',
      img: campaignFinanceGif,
      siteLink: 'romebop.io/fec-vis',
      githubLink: 'github.com/romebop/fec-vis',
    },
  ],
};

const soundCategory: Category = {
  path: 'sound',
  name: 'Sounds',
  shape: X,
  description: 'Combinating and recombinating sounds:',
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