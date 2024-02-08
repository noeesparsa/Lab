import { RenderResult, render, screen } from '@testing-library/react';
import { UiTableImgCellComponent } from './ui-table-img-cell.component';

describe('uiTableImgCellComponent', (): void => {
  let imgSource: string;
  let altText: string;

  beforeEach((): void => {
    imgSource = 'path/to/image';
    altText = 'this is an alt text';
  });

  describe('snapshot testing', (): void => {
    it(`should render correctly and match the snapshot`, (): void => {
      const result: RenderResult = render(<UiTableImgCellComponent source={imgSource} alt={altText} />);

      expect(result).toMatchSnapshot();
    });
  });

  describe('component testing', (): void => {
    it(`should render the date formatted correctly`, (): void => {
      render(<UiTableImgCellComponent source={imgSource} alt={altText} />);

      const imgElement: HTMLElement = screen.getByRole('img');

      expect(imgElement).toBeVisible();
      expect(imgElement).toHaveAttribute('src', imgSource);
      expect(imgElement).toHaveAttribute('alt', altText);
    });
  });
});
