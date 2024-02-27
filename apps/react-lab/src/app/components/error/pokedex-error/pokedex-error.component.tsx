import { VtmnCard } from '@vtmn/react';

interface IProps {
  readonly title: string;
}

export function PokedexError({ title }: IProps): React.JSX.Element {
  return <VtmnCard title={title}>Error</VtmnCard>;
}
