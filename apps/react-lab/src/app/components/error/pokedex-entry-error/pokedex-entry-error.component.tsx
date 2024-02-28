import { VtmnCard } from '@vtmn/react';

interface IProps {
  error: Error | null;
}

export function PokedexEntryError({ error }: IProps): React.JSX.Element {
  return (
    <VtmnCard variant="side-image" title={error?.name ?? 'No information'}>
      {error?.message ?? ''}
    </VtmnCard>
  );
}
