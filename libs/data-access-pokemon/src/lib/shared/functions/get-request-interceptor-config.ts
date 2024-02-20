import { InternalAxiosRequestConfig } from 'axios';

export function getRequestInterceptorConfig(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  config.headers[`Content-Type`] = `application/json`;
  config.headers.Accept = `application/json`;

  return config;
}
