import { RenderResult, render } from '@testing-library/react';
import i18next from 'i18next';
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { i18nConfig } from '@lab/util-i18n';

function customRender(ui: ReactElement): Promise<RenderResult> {
  return i18next
    .init(i18nConfig)
    .then((): RenderResult => render(<MemoryRouter initialEntries={['/']}>{ui}</MemoryRouter>));
}

export { customRender };
