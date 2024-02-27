import { AxiosResponse } from 'axios';
import { AxiosPokemon, POKEMON_CONSTANTS } from '../../shared';
import { INamedResource, IPokeAPiResourceList } from '../../shared/interfaces';

export async function getAllPokemonLite(): Promise<INamedResource[]> {
  const response: AxiosResponse<IPokeAPiResourceList> = await AxiosPokemon.get<IPokeAPiResourceList>(
    `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_CONSTANTS.MAX_POKEMON_NUMBER}&offset=0`,
  );

  return response.data.results;
}
