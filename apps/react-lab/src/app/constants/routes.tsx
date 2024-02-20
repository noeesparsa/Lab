import { RouteObject } from 'react-router-dom';
import App from '../app';
import { PokedexPage } from '../pages/pokedex/pokedex-page.component';

export const routes: RouteObject[] = [
  {
    id: 'root',
    element: <App />,

    children: [
      {
        id: 'home',
        path: '/',
        element: <div>home page</div>,
      },
      {
        id: 'pokedex',
        path: '/pokedex',
        element: <PokedexPage />,
      },
    ],
  },
];
