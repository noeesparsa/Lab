import Navbar from './navbar';
import { renderWithRouter } from '../../tests/render-with-router';

describe('Navbar', () => {
  it('should render correctly', () => {
    const result = renderWithRouter(<Navbar logo={''} redirection={'/'} />);

    expect(result).toMatchSnapshot();
  });
});
