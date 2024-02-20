import { AxiosResponse } from 'axios';
import { AxiosPokemon } from '../../shared';
import { IPokemonLitePaginated } from '../interfaces';

export async function getPokemonLitePaginated({ pageParam }: { pageParam: any }): Promise<IPokemonLitePaginated> {
  const response: AxiosResponse<IPokemonLitePaginated> = await AxiosPokemon.get<IPokemonLitePaginated>(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageParam.limit}&offset=${pageParam.offset}`,
  );

  return response.data;
}
