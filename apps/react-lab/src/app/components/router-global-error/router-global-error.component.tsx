import React, { ReactNode, useMemo } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorCard } from '@laboratory/react-components';

export default function RouterGlobalError(): React.ReactElement {
  const error: unknown = useRouteError();

  let children: ReactNode = ``;

  if (isRouteErrorResponse(error)) {
    const { status, statusText, data } = error;

    children = (
      <>
        <p>
          <b>Error {status}</b>
          {statusText && `: ${statusText}`}
        </p>

        {typeof data === 'string' && (
          <p className="vtmn-typo_caption-1 linqueo-color-grey">{data}</p>
        )}

        {typeof data === 'object' && (
          <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
        )}
      </>
    );
  }

  return useMemo(
    (): React.ReactElement => (
      <ErrorCard title="Something went wrong!" children={children}></ErrorCard>
    ),
    [children]
  );
}
