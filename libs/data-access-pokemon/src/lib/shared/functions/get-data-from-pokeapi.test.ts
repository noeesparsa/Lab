import axios, { AxiosResponse } from 'axios';
import { MockInstance, expectTypeOf } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { IPokemon } from '../../pokemon/interfaces';
import { getDataFromPokeapi } from './get-data-from-pokeapi';

describe('getDataFromPokeapi()', (): void => {
  let endpoint: string;
  let axiosGetSpy: MockInstance;

  describe(`when an endpoint is provided`, (): void => {
    beforeEach(() => {
      endpoint = `https://pokeapi.co/api/v2/pokemon/1`;
    });

    describe('when a response type is provided', (): void => {
      let axiosResponse: AxiosResponse<IPokemon>;

      beforeEach((): void => {
        axiosResponse = mock<AxiosResponse<IPokemon>>();
        axiosGetSpy = vi.spyOn(axios, `get`).mockResolvedValue(axiosResponse);
      });

      it('it should called this endpoint with axios.get ', async (): Promise<void> => {
        expect.assertions(1);

        const result = await getDataFromPokeapi<IPokemon>(endpoint);

        expect(axiosGetSpy).toHaveBeenCalledExactlyOnceWith(endpoint);
        expectTypeOf(result).toMatchTypeOf<IPokemon>();
      });

      it('it should return the data with the correct type', async (): Promise<void> => {
        expect.assertions(0);

        const result = await getDataFromPokeapi<IPokemon>(endpoint);

        expectTypeOf(result).toMatchTypeOf<IPokemon>();
      });
    });
  });
});
