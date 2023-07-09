import App from '../app';
import { HomePage } from '../pages/home/home-page';
import { RouteObject } from 'react-router-dom';
import RouterGlobalError from '../components/router-global-error/router-global-error.component';

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
