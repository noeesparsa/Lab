import GlobalError from './global-error.component';
import { renderWithRouter } from '../../../tests/render-with-router';

describe(`GlobalError`, (): void => {
  it(`should renders correctly`, async (): Promise<void> => {
    const result = await renderWithRouter(
      <GlobalError error={new Error(`Error`)}></GlobalError>
    );

    expect(result).toMatchSnapshot();
  });
});
