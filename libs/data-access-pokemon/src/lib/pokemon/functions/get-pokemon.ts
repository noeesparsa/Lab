import { AxiosResponse } from 'axios';

import { IPokemon } from 'pokeapi-typescript';
import { AxiosPokemon } from '@lab/util-api-pokemon';

/**
 * Return a Pokemon base on an ID.
 * @returns The current user.
 */
export async function getPokemon(id: number): Promise<IPokemon> {
  const response: AxiosResponse<IPokemon> = await AxiosPokemon.get<IPokemon>(`pokemon/${id}`);

  return response.data;
}
