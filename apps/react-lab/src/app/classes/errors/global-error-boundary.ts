import { isRouteErrorResponse } from 'react-router-dom';

export default class GlobalErrorBoundary {
  public static onError(
    error: Error,
    info: {
      componentStack: string;
    }
  ): void {
    console.error(error, {
      messageContext: {
        errorType: `Boundary`,
        componentStack: info.componentStack,
      },
    });
  }

  public static onRouteError(error: unknown): void {
    if (isRouteErrorResponse(error)) {
      console.error(error.status, {
        messageContext: {
          errorType: `RouteErrorResponse`,
          data: error.data ?? `undefined`,
          statusText: error.statusText,
          internal: error.internal,
        },
        error: error.error,
      });

      return;
    }

    console.error(error, {
      messageContext: {
        errorType: `Route`,
      },
    });
  }

  public static onReset(): void {
    console.debug(`Reset global error triggered`);
  }
}
