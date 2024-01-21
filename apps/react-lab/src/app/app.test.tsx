import { RenderResult } from '@testing-library/react';
import { expect } from 'vitest';
import { customRender } from '../tests/custom-render';
import App from './app';

describe('App', (): void => {
  describe('Snapshot testing', (): void => {
    it('should render correctly and match the snapshot', (): void => {
      const result: RenderResult = customRender(<App />);

      expect(result).toMatchSnapshot();
    });
  });
});
