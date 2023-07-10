import { Router } from '@remix-run/router/dist/router';
import { RenderResult, render } from '@testing-library/react';
import { ReactElement } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export function renderWithRouter(ui: ReactElement): RenderResult {
  const router: Router = createBrowserRouter([
    {
      path: `/`,
      element: ui,
    },
  ]);

  return render(<RouterProvider router={router}></RouterProvider>);
}
