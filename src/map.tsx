import drifter from './assets/drifter.gif';
import { Place } from './types';

export const colors = [
  '#0095ff',
  '#f23535',
  'yellow',
];

const map: Place[][] = [
  [
    {
      name: 'People Map',
      description: 'how to love people',
      path: '/people-map',
    },
    {
      name: 'Programming Languages Visualization',
      description: 'compare programming languages',
      path: '/programming-languages-viz',
    },
    {
      name: 'About',
      description: 'saerom park',
      img: <img src={drifter} alt='drifter' />,
      path: '/about',
    },
  ],
  [
    {
      name: 'Rome Bops',
      description: 'personal music player',
      path: '/rome-bops',
    },
    {
      name: 'College Unemployment Visualization',
      description: 'see unemployment rates by major',
      path: '/college-unemployment-viz',
    },
  ],
  [
    {
      name: 'Game of Life',
      description: 'a simulation of Conway\'s Game of Life',
      path: '/game-of-life',
    },
    {
      name: 'Nevada Business Visualization',
      description: 'explore businesses listed on Yelp in Nevada',
      path: '/yelp-viz',
    },
  ],
  [
    {
      name: 'Whiteboard',
      description: 'interactive drawing & chatting tool',
      path: '/whiteboard',
    },
    {
      name: 'FEC Visualization',
      description: 'US Campaign Finance by state',
      path: '/fec-viz',
    },
  ],
  [
    {
      name: 'Never Give Up',
      description: 'how to love people',
      path: '/never-give-up',
    },
  ],
  [
    {
      name: 'WiFinder',
      description: 'find public wi-fi hotspots',
      path: '/wifinder',
    },
  ],
  [
    {
      name: 'Advent of Code',
      description: 'my solutions to the coding advent calendar',
      path: '/advent-of-code',
    },
  ],
];

export default map;