import { RouteObject } from 'react-router-dom';
import App from '../app';

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
    ],
  },
];
