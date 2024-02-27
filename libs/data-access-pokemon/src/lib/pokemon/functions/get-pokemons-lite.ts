import { AxiosResponse } from 'axios';
import { AxiosPokemon } from '../../shared';
import { IPokeAPiResourceList } from '../../shared/interfaces';

export async function getPokemonLitePaginated({ pageParam }: { pageParam: any }): Promise<IPokeAPiResourceList> {
  const response: AxiosResponse<IPokeAPiResourceList> = await AxiosPokemon.get<IPokeAPiResourceList>(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageParam.limit}&offset=${pageParam.offset}`,
  );

  return response.data;
}
