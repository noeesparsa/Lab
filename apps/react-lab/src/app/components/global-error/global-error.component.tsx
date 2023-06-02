import { ErrorCard } from '@laboratory/react-components';
import { useMemo } from 'react';

interface IProps {
  readonly error: Error;
}

export default function GlobalError({ error }: IProps): JSX.Element {
  return useMemo(
    (): JSX.Element => (
      <ErrorCard
        title="Something went wrong!"
        children={<p>{error.message}</p>}
      ></ErrorCard>
    ),
    [error]
  );
}
