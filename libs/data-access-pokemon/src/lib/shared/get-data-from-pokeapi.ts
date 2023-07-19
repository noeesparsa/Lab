import axios, { AxiosResponse } from 'axios';

export async function getDataFromPokeapi<T>(url: string): Promise<T> {
  const response: AxiosResponse<T> = await axios.get<T>(url);

  return response.data as T;
}
