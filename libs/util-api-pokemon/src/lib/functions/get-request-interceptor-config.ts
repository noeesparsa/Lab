import { InternalAxiosRequestConfig } from 'axios';
import { ENVIRONMENT } from '../environment/environment';

export function getRequestInterceptorConfig(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  config.baseURL = ENVIRONMENT.baseServerUrl;
  config.headers[`Content-Type`] = `application/json`;
  config.headers.Accept = `application/json`;

  return config;
}
