import { InternalAxiosRequestConfig } from 'axios';
import { mock } from 'vitest-mock-extended';
import { getRequestInterceptorConfig } from './get-request-interceptor-config';

describe(`getRequestInterceptorConfig()`, (): void => {
  let config: InternalAxiosRequestConfig;

  beforeEach((): void => {
    config = mock<InternalAxiosRequestConfig>();
  });

  describe(`when the request interceptor config is use`, (): void => {
    it(`should set the header "Content-Type" to send JSON`, (): void => {
      const result: InternalAxiosRequestConfig = getRequestInterceptorConfig(config);

      expect(result.headers[`Content-Type`]).toBe(`application/json`);
    });

    it(`should set the header "Accept" to receive JSON`, (): void => {
      const result: InternalAxiosRequestConfig = getRequestInterceptorConfig(config);

      expect(result.headers.Accept).toBe(`application/json`);
    });
  });
});
