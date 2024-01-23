import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './app/constants/routes';
import '@front/util-i18n';

const root = createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
