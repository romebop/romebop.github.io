import { Action, Category, Position } from './types';

const appCategory: Category = {
  path: 'app',
  name: 'Apps',
  description: 'Application Category',
  items: [
    {
      name: 'Item 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      path: 'item-1',
    },
    {
      name: 'Item 2 Item 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      path: 'item-2',
    },
    {
      name: 'Item 3 Item 3 Item 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      path: 'item-3',
    },
  ],
};

const visCategory: Category = {
  path: 'vis',
  name: 'Visuals',
  description: 'Visualization Category',
  items: [
    {
      name: 'Item 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      path: 'item-4',
    },
    {
      name: 'Item 5 Item 5',
      description: 'Amet dictum sit amet justo donec enim. Facilisi etiam dignissim diam quis enim. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Neque sodales ut etiam sit amet.',
      path: 'item-5',
    },
    {
      name: 'Item 6',
      description: 'Malesuada bibendum arcu vitae elementum curabitur vitae. Sed ullamcorper morbi tincidunt ornare massa eget. Lectus quam id leo in vitae turpis massa sed.',
      path: 'item-6',
    },
    {
      name: 'Item 7 Item 7',
      description: 'Viverra justo nec ultrices dui sapien eget mi proin. Arcu ac tortor dignissim convallis aenean et tortor at. Pellentesque elit eget gravida cum sociis. Malesuada bibendum arcu vitae elementum curabitur vitae. Sed ullamcorper morbi tincidunt ornare massa eget. Lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Arcu cursus vitae congue mauris rhoncus. Risus in hendrerit gravida rutrum. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      path: 'item-7',
    },
    {
      name: 'Item 8',
      description: 'Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sagittis vitae et leo duis ut diam quam nulla porttitor. Netus et malesuada fames ac turpis egestas.',
      path: 'item-8',
    },
    {
      name: 'Item 9 Item 9',
      description: 'Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sagittis vitae et leo duis ut diam quam nulla porttitor.',
      path: 'item-9',
    },
  ],
};

const soundCategory: Category = {
  path: 'sound',
  name: 'Sounds',
  description: 'Sound Category',
  items: [
    {
      name: 'Item 10 Item 10',
      description: 'Vitae et leo duis ut diam quam nulla.',
      path: 'item-10',
    },
    {
      name: 'Item 11 Item 11',
      description: 'Vitae et leo duis ut diam quam nulla. Eget nunc lobortis mattis aliquam faucibus purus in massa. Mus mauris vitae ultricies leo. Cras tincidunt lobortis feugiat vivamus at augue eget. In hendrerit gravida rutrum quisque non tellus orci ac. Ipsum faucibus vitae aliquet nec ullamcorper sit.',
      path: 'item-11',
    },
    {
      name: 'Item 12 Item 12',
      description: 'Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Volutpat sed cras ornare arcu dui.',
      path: 'item-12',
    },
    {
      name: 'Item 13 Item 13',
      description: 'Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Volutpat sed cras ornare arcu dui. Risus feugiat in ante metus dictum at tempor. Mattis pellentesque id nibh tortor id aliquet lectus proin. Aliquam vestibulum morbi blandit cursus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Bibendum arcu vitae elementum curabitur vitae nunc sed.',
      path: 'item-13',
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