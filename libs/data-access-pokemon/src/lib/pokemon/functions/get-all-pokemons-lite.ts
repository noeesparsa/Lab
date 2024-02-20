import { AxiosResponse } from 'axios';
import { AxiosPokemon, POKEMON_CONSTANTS } from '../../shared';
import { IPokemonLite, IPokemonLitePaginated } from '../interfaces';

export async function getAllPokemonLite(): Promise<IPokemonLite[]> {
  const response: AxiosResponse<IPokemonLitePaginated> = await AxiosPokemon.get<IPokemonLitePaginated>(
    `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_CONSTANTS.MAX_POKEMON_NUMBER}&offset=0`,
  );

  return response.data.results;
}
