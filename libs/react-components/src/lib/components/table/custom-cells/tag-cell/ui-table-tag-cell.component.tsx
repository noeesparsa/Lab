import { VtmnTag } from '@vtmn/react';
import { VtmnTagVariant } from '@vtmn/react/dist/src/components/indicators/VtmnTag/types';

interface IProps {
  readonly text: string;
  readonly variant?: VtmnTagVariant;
}

export function UiTableTagCellComponent({ text, variant }: IProps): React.JSX.Element {
  return <VtmnTag variant={variant}>{text}</VtmnTag>;
}
