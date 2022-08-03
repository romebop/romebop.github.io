import { Place } from './types';

export const categoryColors = [
  'hsl(0, 100%, 65%)',
  'hsl(205, 100%, 50%)',
  'hsl(141, 75%, 56%)',
  'hsl(175, 100%, 75%)',
];

const map: Place[][] = [
  [
    {
      name: 'Kinji Hakari',
      description: 'Third-year student at Tokyo Jujutsu High who is currently suspended for clashing with authority',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Kinji_Hakari',
      imgName: 'kinji-hakari.png',
      path: '/kinji-hakari',
    },
    {
      name: 'Satoru Gojo',
      description: 'A special grade jujutsu sorcerer and widely recognized as the strongest in the world',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Satoru_Gojo',
      imgName: 'satoru-gojo.png',
      path: '/satoru-gojo',
    },
    {
      name: 'Yuji Itadori',
      description: 'He ate one of Sukuna\'s fingers',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Yuji_Itadori',
      imgName: 'yuji-itadori.gif',
      path: '/yuji-itadori',
    },
    {
      name: 'Megumi Fushiguro',
      description: 'A descendant of the Zenin Family',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Megumi_Fushiguro',
      imgName: 'megumi-fushiguro.png',
      path: '/megumi-fushiguro',
    },
    {
      name: 'Yuta Okkotsu',
      description: 'A special grade cursed human haunted by his late childhood friend, Rika Orimoto',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Yuta_Okkotsu',
      imgName: 'yuta-okkotsu.png',
      path: '/yuta-okkotsu',
    },
    {
      name: 'Panda',
      description: 'An Abrupt Mutated Cursed Corpse created by Masamichi Yaga',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Panda',
      imgName: 'panda.png',
      path: '/panda',
    },
    {
      name: 'Maki Zenin',
      description: 'Born a non-sorcerer in one of the Big Three Sorcerer Families',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Maki_Zenin',
      imgName: 'maki-zenin.png',
      path: '/maki-zenin',
    },
    {
      name: 'Suguru Geto',
      description: 'A student of Masamichi Yaga\'s alongside Satoru Gojo and Shoko Ieiri at Tokyo Jujutsu High',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Suguru_Geto',
      imgName: 'suguru-geto.png',
      path: '/suguru-geto',
    },
  ],
  [
    {
      name: 'Toji Fushiguro',
      description: 'Infamous assassin known as the Sorcerer Killer',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Toji_Fushiguro',
      imgName: 'toji-fushiguro.png',
      path: '/toji-fushiguro',
    },
    {
      name: 'Hiromi Higuruma',
      description: 'A defense attourney who often took on impossibly difficult cases in order to protect the wrongfully accused',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Hiromi_Higuruma',
      imgName: 'hiromi-higuruma.png',
      path: '/hiromi-higuruma',
    },
    {
      name: 'Hajime Kashimo',
      description: 'A jujutsu sorcerer from 400 years ago currently inhabiting the body of someone Kenjaku prepared as a vessel',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Hajime_Kashimo',
      imgName: 'hajime-kashimo.png',
      path: '/hajime-kashimo',
    },
    {
      name: 'Ryu Ishigori',
      description: 'A classic hotshot that both men and women admire',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Ryu_Ishigori',
      imgName: 'ryu-ishigori.png',
      path: '/ryu-ishigori',
    },
    {
      name: 'Reggie Star',
      description: 'He leads his own group of sorcerers in the Tokyo No. 1 Colony',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Reggie_Star',
      imgName: 'reggie-star.png',
      path: '/reggie-star',
    },
    {
      name: 'Charles Bernard',
      description: 'An aspiring mangaka who was aggressively pursuing his goals until he was unwillingly forced to participate in the Culling Game',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Charles_Bernard',
      imgName: 'charles-bernard.png',
      path: '/charles-bernard',
    },
    {
      name: 'Hana Kurusu',
      description: 'A cursed technique user that can extinguish any other cursed techniques',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Hana_Kurusu',
      imgName: 'hana-kurusu.png',
      path: '/hana-kurusu',
    },
  ],
  [
    {
      name: 'Sukuna',
      description: 'A mighty cursed spirit known as the undisputed King of Curses',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Sukuna',
      imgName: 'sukuna.png',
      path: '/sukuna',
    },
    {
      name: 'Jogo',
      description: 'An unregistered special grade cursed spirit aligned with Mahito, Hanami, and Dagon',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Jogo',
      imgName: 'jogo.png',
      path: '/jogo',
    },
    {
      name: 'Hanami',
      description: 'He was born from the fear of land based natural disasters and he desired to rid the earth of humanity because of their mistreatment of nature',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Hanami',
      imgName: 'hanami.png',
      path: '/hanami',
    },
    {
      name: 'Dagon',
      description: 'He was born from the fear of water-based natural disasters and existed as a cursed womb until he evolved during the Shibuya Incident',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Dagon',
      imgName: 'dagon.png',
      path: '/dagon',
    },
    {
      name: 'Choso',
      description: 'He and his two brothers, Kechizu and Eso are incarnated Cursed Womb: Death Paintings No. 1-3',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Choso',
      imgName: 'choso.png',
      path: '/choso',
    },
    {
      name: 'Eight-Handled Sword Divergent Sila Divine General Mahoraga',
      description: 'The most powerful shikigami of the Ten Shadows Technique',
      link: 'https://jujutsu-kaisen.fandom.com/wiki/Eight-Handled_Sword_Divergent_Sila_Divine_General_Mahoraga',
      imgName: 'eight-handled-sword-divergent-sila-divine-general-mahoraga.png',
      path: '/eight-handled-sword-divergent-sila-divine-general-mahoraga',
    },
  ],
  [
    {
      name: 'Saerom Park',
      description: 'He is a romebop',
      link: 'https://romebop.io',
      imgName: 'drifter.gif',
      path: '/about',
    },
  ],
];

// function preprocess(map: Place[][]): Place[][] {
//   const preprocessedMap: Place[][] = Array(map[0].length).fill(null).map(() => []);
//   for (let x = 0; x < map[0].length; x++) {
//     for (let y = 0; y < map.length; y++) {
//       if (map[y][x]) {
//         preprocessedMap[x].push(map[y][x]);
//       }
//     }
//   }
//   return preprocessedMap;
// }

export default map;