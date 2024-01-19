import { RenderResult, render } from '@testing-library/react';
import { describe } from 'vitest';
import { Navbar } from './navbar.component';

describe('navbar', (): void => {
  describe('snapshot testing', (): void => {
    it('should render correctly and match the snapshot', (): void => {
      const result: RenderResult = render(<Navbar />);

      expect(result).toMatchSnapshot();
    });
  });
});
