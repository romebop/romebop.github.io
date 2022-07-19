import drifter from './assets/drifter.gif';
import { Place } from './types';

function About() {
  return <img src={drifter} alt="drifter" />;
}

const map: Place[][] = [
  [
    {
      name: 'People Map',
      description: 'how to love people',
    },
    {
      name: 'Programming Languages Visualization',
      description: 'compare programming languages',
    },
    {
      name: 'About',
      description: 'saerom park',
      component: <About />,
    },
  ],
  [
    {
      name: 'Rome Bops',
      description: 'personal music player',
    },
    {
      name: 'College Unemployment Visualization',
      description: 'see unemployment rates by major',
    },
  ],
  [
    {
      name: 'Game of Life',
      description: 'a simulation of Conway\'s Game of Life',
    },
    {
      name: 'Nevada Business Visualization',
      description: 'explore businesses listed on Yelp in Nevada',
    },
  ],
  [
    {
      name: 'Whiteboard',
      description: 'interactive drawing & chatting tool',
    },
    {
      name: 'FEC Visualization',
      description: 'US Campaign Finance by state',
    },
  ],
  [
    {
      name: 'Never Give Up',
      description: 'how to love people',
    },
  ],
  [
    {
      name: 'WiFinder',
      description: 'find public wi-fi hotspots',
    },
  ],
  [
    {
      name: 'Advent of Code',
      description: 'my solutions to the coding advent calendar',
    },
  ],
];

export default map;