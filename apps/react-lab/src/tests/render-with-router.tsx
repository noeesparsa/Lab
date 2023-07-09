import { RenderResult, render } from '@testing-library/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ReactElement } from 'react';
import { Router } from '@remix-run/router/dist/router';

export function renderWithRouter(ui: ReactElement): RenderResult {
  const router: Router = createBrowserRouter([
    {
      path: `/`,
      element: ui,
    },
  ]);

  return render(<RouterProvider router={router}></RouterProvider>);
}
