import App from './app';
import { renderWithRouter } from '../tests/render-with-router';

describe('App', () => {
  it('should render correctly', async (): Promise<void> => {
    const result = await renderWithRouter(<App />);
    expect(result).toMatchSnapshot();
  });
});
