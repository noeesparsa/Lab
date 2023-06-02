import { Router } from '@remix-run/router/dist/router';
import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export function renderWithRouter(ui: ReactElement): RenderResult {
  const router: Router = createBrowserRouter([
    {
      path: `/`,
      element: ui,
    },
  ]);

  return render(<RouterProvider router={router}></RouterProvider>);
}
