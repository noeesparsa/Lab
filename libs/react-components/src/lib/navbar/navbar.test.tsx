import { renderWithRouter } from '../../tests/render-with-router';
import Navbar from './navbar';

describe('navbar', () => {
  it('should render correctly', () => {
    const result = renderWithRouter(<Navbar logo={''} redirection={'/'} />);

    expect(result).toMatchSnapshot();
  });
});
