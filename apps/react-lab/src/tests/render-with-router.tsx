import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Router } from '@remix-run/router/dist/router';

import { ReactElement } from 'react';
import { RenderResult, render } from '@testing-library/react';

export function renderWithRouter(ui: ReactElement): RenderResult {
  const router: Router = createBrowserRouter([
    {
      path: `/`,
      element: ui,
    },
  ]);

  return render(<RouterProvider router={router}></RouterProvider>);
}
