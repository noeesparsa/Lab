import { RenderResult, render } from '@testing-library/react';
import { VtmnTagVariant } from '@vtmn/react/dist/src/components/indicators/VtmnTag/types';
import { UiTableTagCellComponent } from './ui-table-tag-cell.component';

describe('uiTableTagCellComponent', (): void => {
  let tagText: string;
  let tagVariant: VtmnTagVariant;

  beforeEach((): void => {
    tagText = 'This is a tag cell';
    tagVariant = 'decorative_emerald';
  });

  describe('snapshot testing', (): void => {
    it('should render correctly and match the snapshot', (): void => {
      const result: RenderResult = render(<UiTableTagCellComponent text={tagText} variant={tagVariant} />);

      expect(result).toMatchSnapshot();
    });
  });
});
