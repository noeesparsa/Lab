import { RenderResult, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

function customRender(ui: ReactElement): RenderResult {
  return render(<MemoryRouter initialEntries={['/']}>{ui}</MemoryRouter>);
}

export { customRender };
