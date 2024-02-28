import { VtmnCard } from '@vtmn/react';

interface IProps {
  readonly error: Error | null;
}

export function PokedexError({ error }: IProps): React.JSX.Element {
  return <VtmnCard title={error?.name ?? 'No information'}> {error?.message ?? ''}</VtmnCard>;
}
