import { RenderResult, render } from '@testing-library/react';
import { beforeEach, describe } from 'vitest';
import { Navbar } from './navbar.component';

describe('navbar', (): void => {
  let logoUrl: string;

  beforeEach((): void => {
    logoUrl = 'path/to/logo';
  });

  describe('snapshot testing', (): void => {
    it('should render correctly and match the snapshot', (): void => {
      const result: RenderResult = render(<Navbar logoUrl={logoUrl} />);

      expect(result).toMatchSnapshot();
    });
  });
});
