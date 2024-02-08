import { randNumber } from '@ngneat/falso';
import { RenderResult, render, screen } from '@testing-library/react';
import { UiProgressBarCell } from './progress-bar-cell.component';

describe('uiProgressBarCell', (): void => {
  let currentProgressbarValue: number;
  let maxProgressBarValue: number;

  describe('snapshot testing', (): void => {
    beforeEach((): void => {
      currentProgressbarValue = 50;
      maxProgressBarValue = 100;
    });

    it('should render correctly and match the snapshot', (): void => {
      const result: RenderResult = render(
        <UiProgressBarCell currentValue={currentProgressbarValue} maxValue={maxProgressBarValue} />,
      );

      expect(result).toMatchSnapshot();
    });
  });

  describe('component testing', (): void => {
    beforeEach((): void => {
      currentProgressbarValue = randNumber();
      maxProgressBarValue = randNumber();
    });

    it('should render a progressbar with correct value ', (): void => {
      render(<UiProgressBarCell currentValue={currentProgressbarValue} maxValue={maxProgressBarValue} />);
      const progressbarElement: HTMLElement = screen.getByRole('progressbar');
      const progressbarTextElement: HTMLElement = screen.getByText(
        `${currentProgressbarValue} / ${maxProgressBarValue}`,
      );

      expect(progressbarElement).toBeVisible();
      expect(progressbarTextElement).toBeVisible();
    });
  });
});
