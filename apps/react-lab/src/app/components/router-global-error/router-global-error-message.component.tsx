import _ from 'lodash';
import React, { ReactNode, useMemo } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorCard } from '@laboratory/react-components';

export default function RouterGlobalError(): React.ReactElement {
  const error: unknown = useRouteError();

  let children: ReactNode = ``;

  if (isRouteErrorResponse(error)) {
    children = (
      <>
        <p>
          <b>Error {error.status}</b>
          {error.statusText ? `: ${error.statusText}` : ``}
        </p>
        {error.data && _.isString(error.data) ? (
          <p className="vtmn-typo_caption-1 linqueo-color-grey">{error.data} </p>
        ) : (
          ``
        )}
        {error.data && _.isPlainObject(error.data) ? (
          <pre>
            <code>{JSON.stringify(error.data, null, 2)}</code>
          </pre>
        ) : (
          ``
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
