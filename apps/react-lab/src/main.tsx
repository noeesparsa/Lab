import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalErrorBoundary from './app/classes/errors/global-error-boundary';
import GlobalError from './app/components/global-error/global-error.component';

import { routes } from './app/constants/routes';

const root = createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={GlobalError}
      onError={GlobalErrorBoundary.onError}
      onReset={GlobalErrorBoundary.onReset}
    >
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
