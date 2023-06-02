import RouterGlobalError from './router-global-error.component';
import { renderWithRouter } from '../../../tests/render-with-router';

describe(`routerGlobalError`, (): void => {
  it(`should renders correctly`, async (): Promise<void> => {
    const result = await renderWithRouter(
      <RouterGlobalError></RouterGlobalError>
    );

    expect(result).toMatchSnapshot();
  });
});
