import { randWord } from '@ngneat/falso';
import { RenderResult, render, screen } from '@testing-library/react';
import { EReactComponentsIllustrationsDataTestId } from '../../enums';
import { Loading } from './loading.component';

describe('uiLoading', (): void => {
  let loadingText: string;
  describe('snapshot testing', (): void => {
    beforeEach((): void => {
      loadingText = `Loading ...`;
    });
    it(`should render correctly and match the snapshot`, (): void => {
      const result: RenderResult = render(<Loading title={loadingText} />);

      expect(result).toMatchSnapshot();
    });

    it(`should render the correct illustration and match the snapshot`, (): void => {
      render(<Loading title={loadingText} />);

      const image: HTMLElement = screen.getByTestId(EReactComponentsIllustrationsDataTestId.LOADING);

      expect(image).toBeVisible();
      expect(<image></image>).toMatchSnapshot();
    });
  });

  describe('component testing', (): void => {
    describe('when a title is provided', (): void => {
      beforeEach((): void => {
        loadingText = randWord();
      });

      it(`should display the loading component with a title`, (): void => {
        render(<Loading title={loadingText} />);

        const title: HTMLElement = screen.getByText(loadingText);

        expect(title).toBeVisible();
      });
    });
  });
});
