import { RenderResult } from '@testing-library/react';
import { customRender } from '../tests/custom-render';
import App from './app';

describe('App', (): void => {
  describe('Snapshot testing', (): void => {
    it('should render correctly and match the snapshot', async (): Promise<void> => {
      expect.assertions(1);
      const result: RenderResult = await customRender(<App />);

      expect(result).toMatchSnapshot();
    });
  });
});
