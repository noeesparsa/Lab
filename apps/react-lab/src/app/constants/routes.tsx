import { RouteObject } from 'react-router-dom';
import App from '../app';
import { HomePage } from '../pages/home/home-page';
import RouterGlobalError from '../components/router-global-error/router-global-error-message.component';

export const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    element: <App />,
    errorElement: <RouterGlobalError />,

    children: [
      {
        id: 'home',
        path: 'home',
        element: <HomePage />,
      },
    ],
  },
];
