import { RenderResult, render, screen } from '@testing-library/react';
import { UiTableDateCellComponent } from './ui-table-date-cell.component';

describe('uiTableDateCellComponent', (): void => {
  let date: string;

  beforeEach((): void => {
    date = '2024-01-01T00:00:00.000+0100';
  });

  describe('snapshot testing', (): void => {
    it(`should render correctly and match the snapshot`, (): void => {
      const result: RenderResult = render(<UiTableDateCellComponent date={date} />);

      expect(result).toMatchSnapshot();
    });
  });

  describe('component testing', (): void => {
    it(`should render the date formatted correctly`, (): void => {
      render(<UiTableDateCellComponent date={date} />);

      const dateElement: HTMLElement = screen.getByText('01/01/2024');

      expect(dateElement).toBeVisible();
    });
  });
});
