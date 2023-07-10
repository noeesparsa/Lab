import { ReactNode, useMemo } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorCard } from '@laboratory/react-components';

function generateErrorMessage(error: unknown): ReactNode {
  if (!isRouteErrorResponse(error)) {
    return ``;
  }
  const { status, statusText, data } = error;

  return (
    <>
      <p>
        <b>Error {status}</b>
        {statusText && `: ${statusText}`}
      </p>

      {typeof data === 'string' && <p className="vtmn-typo_caption-1 linqueo-color-grey">{data}</p>}

      {typeof data === 'object' && (
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )}
    </>
  );
}

export default function RouterGlobalError(): React.ReactElement {
  const error: unknown = useRouteError();

  const children: ReactNode = generateErrorMessage(error);

  return useMemo((): JSX.Element => <ErrorCard title="Something went wrong!">{children}</ErrorCard>, [children]);
}
