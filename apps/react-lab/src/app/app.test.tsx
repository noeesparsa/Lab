import { renderWithRouter } from '../tests/render-with-router';

import App from './app';

describe('App', () => {
  it('should render correctly', async (): Promise<void> => {
    const result = await renderWithRouter(<App />);
    expect(result).toMatchSnapshot();
  });
});
