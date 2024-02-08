import { VtmnIcon } from '@vtmn/react';

export function getSortIcon(currentSorting: string): React.JSX.Element {
  switch (currentSorting) {
    case 'asc': {
      return <VtmnIcon value="arrow-up-fill" variant={'brand'} />;
    }

    case 'desc': {
      return <VtmnIcon value="arrow-down-fill" variant={'brand'} />;
    }

    default: {
      return <VtmnIcon value={'arrow-up-down-fill'} variant={'brand'} />;
    }
  }
}
