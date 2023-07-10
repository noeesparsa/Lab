import { RouteObject } from 'react-router-dom';
import App from '../app';
import RouterGlobalError from '../components/router-global-error/router-global-error.component';

import { HomePage } from '../pages/home/home-page';

export const routes: RouteObject[] = [
  {
    id: 'root',
    element: <App />,
    errorElement: <RouterGlobalError />,

    children: [
      {
        id: 'home',
        path: '/',
        element: <HomePage />,
      },
    ],
  },
];
