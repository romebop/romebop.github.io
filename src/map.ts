import Square from 'src/assets/Square.svg?react';
import Circle from 'src/assets/Circle.svg?react';
import X from 'src/assets/X.svg?react';

import backTimeVideo from 'src/assets/backtime.mp4';
import peopleMapVideo from 'src/assets/people-map.mp4';
import whiteboardVideo from 'src/assets/whiteboard.mp4';
import chessRayVideo from 'src/assets/chess-ray.mp4';

import gameOfLifeVideo from 'src/assets/game-of-life.mp4';
import perlinNoiseVideo from 'src/assets/perlin-noise.mp4';
import audioVizVideo from 'src/assets/audio-viz.mp4';
import yelpVisVideo from 'src/assets/yelp-vis.mp4';
import collegeUnemploymentVideo from 'src/assets/college-unemployment.mp4';
import campaignFinanceVideo from 'src/assets/campaign-finance.mp4';

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
      video: backTimeVideo,
      siteLink: 'backtime.onrender.com',
      githubLink: 'github.com/romebop/backtime',
    },
    {
      path: 'people-map',
      name: 'People Map',
      description: 'A social note taking app built using React. Users can write notes on cards representing persons, draw connections between them, and examine their broader social network represented as a D3.js Force-Directed Graph. Data is stored in localStorage.',
      video: peopleMapVideo,
      siteLink: 'people-map.romebop.io',
      githubLink: 'github.com/romebop/people-map',
    },
    {
      path: 'whiteboard',
      name: 'Whiteboard',
      description: 'A collaborative drawing & chatting application built on Node.js. Users can draw on HTML <canvas> to other clients and chat by setting a username in real-time via Socket.IO. Data is persisted on MongoDB.',
      video: whiteboardVideo,
      siteLink: 'whiteboard.romebop.io',
      githubLink: 'github.com/romebop/whiteboard',
    },
    {
      path: 'chess-ray',
      name: 'Chess-ray',
      description: 'A Chrome extension for visualizing piece threats on chess.com (for practice purposes only!).',
      video: chessRayVideo,
      githubLink: 'github.com/romebop/chess-ray',
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
      path: 'perlin-noise',
      name: 'Perlin Noise',
      description: 'Perlin Noise visualization expressed via an assortment of density shapes using p5.js.',
      video: perlinNoiseVideo,
      siteLink: 'perlin-noise.romebop.io',
      githubLink: 'github.com/romebop/perlin-noise',
    },
    {
      path: 'game-of-life',
      name: 'Game of Life',
      description: "Simulating Conway’s Game of Life from various initial states on HTML <canvas>.",
      video: gameOfLifeVideo,
      siteLink: 'game-of-life.romebop.io',
      githubLink: 'github.com/romebop/game-of-life',
    },
    {
      path: 'audio-visualizer',
      name: 'Audio Visualizer',
      description: 'Audio visualization using Web Audio API and Three.js.',
      video: audioVizVideo,
      siteLink: 'audio-viz.romebop.io',
      githubLink: 'github.com/romebop/audio-viz',
    },
    {
      path: 'yelp-dataset',
      name: 'Yelp Dataset Challenge',
      description: 'SVG dots rendered on top of Las Vegas via Mapbox GL JS.',
      video: yelpVisVideo,
      siteLink: 'yelp-vis.romebop.io',
      githubLink: 'github.com/romebop/yelp-vis',
    },
    {
      path: 'college-unemployment',
      name: 'College Unemployment',
      description: 'Assortments of college majors and their unemployment rates.',
      video: collegeUnemploymentVideo,
      siteLink: 'college-unemployment-vis.romebop.io',
      githubLink: 'github.com/romebop/college-unemployment-vis',
    },
    {
      path: 'campaign-finance',
      name: 'US Campaign Finance',
      description: 'Interactive bar chart of U.S. campaign contributions per State from Federal Elections Commission data.',
      video: campaignFinanceVideo,
      siteLink: 'fec-vis.romebop.io',
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
      path: 'item-11',
      name: 'Item 11 Item 11',
      description: '11 Vitae et leo duis ut diam quam nulla.',
    },
    {
      path: 'item-12',
      name: 'Item 12 Item 12',
      description: '12 Eget nunc lobortis mattis aliquam faucibus purus in massa.',
    },
    {
      path: 'item-13',
      name: 'Item 13 Item 13',
      description: '13 Magna fringilla urna porttitor rhoncus dolor purus non enim praesent.',
    },
    {
      path: 'item-14',
      name: 'Item 14 Item 14',
      description: '14 Libero enim sed faucibus turpis in eu mi bibendum neque. Volutpat sed cras ornare arcu dui.',
    },
    {
      path: 'item-15',
      name: 'Item 15 Item 15',
      description: '15 Faucibus purus in massa tempor nec feugiat nisl pretium fusce.',
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