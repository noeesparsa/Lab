import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getRequestInterceptorConfig } from '../functions';

const axiosPokemonInstance: AxiosInstance = axios.create();

axiosPokemonInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | never => getRequestInterceptorConfig(config),
);

axiosPokemonInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): void => {
    throw error;
  },
);

export { axiosPokemonInstance };
