import { AxiosResponse } from 'axios';
import { AxiosPokemon } from '../../shared';
import { IPokemon } from '../interfaces';

/**
 * Return a Pokémon base on an ID.
 * @returns The current user.
 */
export async function getPokemonByName(name: string): Promise<IPokemon> {
  const response: AxiosResponse<IPokemon> = await AxiosPokemon.get<IPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
  );

  return response.data;
}
