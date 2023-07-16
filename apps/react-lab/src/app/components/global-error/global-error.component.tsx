import { useMemo } from 'react';
import { ErrorCard } from '@lab/react-components';

interface IProps {
  readonly error: Error;
}

export default function GlobalError({ error }: IProps): JSX.Element {
  return useMemo(
    (): JSX.Element => (
      <ErrorCard title="Something went wrong!">
        <p>{error.message}</p>
      </ErrorCard>
    ),
    [error],
  );
}
