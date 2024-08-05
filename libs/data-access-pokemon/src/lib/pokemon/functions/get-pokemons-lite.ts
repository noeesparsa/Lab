import { AxiosResponse } from 'axios';
import { AxiosPokemon, IPokeAPiResourceList } from '../../shared';

export async function getPokemonLitePaginated({ pageParam }: { pageParam: any }): Promise<IPokeAPiResourceList> {
  const response: AxiosResponse<IPokeAPiResourceList> = await AxiosPokemon.get<IPokeAPiResourceList>(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageParam.limit}&offset=${pageParam.offset}`,
  );

  return response.data;
}
