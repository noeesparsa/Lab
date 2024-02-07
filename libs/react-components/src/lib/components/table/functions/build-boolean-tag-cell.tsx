import { UiTableTagCellComponent } from '../custom-cells';
import { EBooleanTags } from '../enums';

export function buildBooleanTagCell(booleanValue: boolean): React.JSX.Element {
  switch (booleanValue) {
    case true: {
      return <UiTableTagCellComponent text={EBooleanTags.TRUE} variant={'decorative_jade'} />;
    }

    case false: {
      return <UiTableTagCellComponent text={EBooleanTags.FALSE} variant={'decorative_brick'} />;
    }
  }
}
