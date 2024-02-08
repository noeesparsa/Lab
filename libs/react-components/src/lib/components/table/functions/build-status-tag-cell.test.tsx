import { UiTableTagCellComponent } from '../custom-cells';
import { EDemoStatusTag } from '../enums';
import { STATUS_TAG_CELL } from './build-status-tag-cell';

describe.each([
  [EDemoStatusTag.STATUS1, <UiTableTagCellComponent text={EDemoStatusTag.STATUS1} variant={'decorative_emerald'} />],
  [EDemoStatusTag.STATUS2, <UiTableTagCellComponent text={EDemoStatusTag.STATUS2} variant={'decorative_gold'} />],
  [EDemoStatusTag.STATUS3, <UiTableTagCellComponent text={EDemoStatusTag.STATUS3} variant={'decorative_cobalt'} />],
])("sTATUS_TAG_CELL['%s']", (statusValue: EDemoStatusTag, expectedOutput: React.JSX.Element): void => {
  it(`should return the correct <UiTableTagCellComponent/>`, (): void => {
    expect.assertions(1);

    const result: React.JSX.Element = STATUS_TAG_CELL[statusValue];

    expect(result).toStrictEqual(expectedOutput);
  });
});
