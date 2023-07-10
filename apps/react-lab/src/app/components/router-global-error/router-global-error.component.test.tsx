import { renderWithRouter } from '../../../tests/render-with-router';

import RouterGlobalError from './router-global-error.component';

describe(`routerGlobalError`, (): void => {
  it(`should renders correctly`, async (): Promise<void> => {
    const result = await renderWithRouter(<RouterGlobalError></RouterGlobalError>);

    expect(result).toMatchSnapshot();
  });
});
