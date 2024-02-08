import { UiTableTagCellComponent } from '../custom-cells';
import { EDemoStatusTag } from '../enums';

export const STATUS_TAG_CELL: Record<EDemoStatusTag, React.JSX.Element> = {
  [EDemoStatusTag.STATUS1]: <UiTableTagCellComponent text={EDemoStatusTag.STATUS1} variant={'decorative_emerald'} />,
  [EDemoStatusTag.STATUS2]: <UiTableTagCellComponent text={EDemoStatusTag.STATUS2} variant={'decorative_gold'} />,
  [EDemoStatusTag.STATUS3]: <UiTableTagCellComponent text={EDemoStatusTag.STATUS3} variant={'decorative_cobalt'} />,
};
