import { UiTableTagCellComponent } from '../custom-cells';
import { EBooleanTags } from '../enums';
import { buildBooleanTagCell } from './build-boolean-tag-cell';

describe.each([
  [true, <UiTableTagCellComponent text={EBooleanTags.TRUE} variant={'decorative_jade'} />],
  [false, <UiTableTagCellComponent text={EBooleanTags.FALSE} variant={'decorative_brick'} />],
])('buildBooleanTagCell(%s)', (booleanValue: boolean, expectedOutput: React.JSX.Element): void => {
  it(`should return the correct <UiTableTagCellComponent/>`, (): void => {
    expect.assertions(1);

    const result: React.JSX.Element = buildBooleanTagCell(booleanValue);

    expect(result).toStrictEqual(expectedOutput);
  });
});
