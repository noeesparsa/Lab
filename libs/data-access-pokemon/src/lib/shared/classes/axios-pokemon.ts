import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosPokemonInstance } from '../constants';

export class AxiosPokemon {
  public static get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axiosPokemonInstance.get<T>(url, config);
  }

  public static post<T, TU>(url: string, data: TU, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axiosPokemonInstance.post<T>(url, data, config);
  }

  public static patch<T, TU>(url: string, data?: TU, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axiosPokemonInstance.patch<T>(url, data, config);
  }

  public static put<T, TU>(url: string, data: TU, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axiosPokemonInstance.put<T>(url, data, config);
  }

  public static delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axiosPokemonInstance.delete<T>(url, config);
  }
}
