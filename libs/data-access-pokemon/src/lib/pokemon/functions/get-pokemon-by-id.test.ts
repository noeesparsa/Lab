import { AxiosResponse } from 'axios';
import { IPokemon } from 'pokeapi-typescript';
import { MockInstance } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { getPokemonById } from './get-pokemon-by-id';
import { AxiosPokemon } from '@lab/util-api-pokemon';

describe(`getPokemonById()`, (): void => {
  let axiosPokemonGetSpy: MockInstance;
  let axiosResponse: AxiosResponse<IPokemon>;
  let pokemonId: number;

  beforeEach((): void => {
    axiosResponse = mock<AxiosResponse<IPokemon>>();
    axiosPokemonGetSpy = vi.spyOn(AxiosPokemon, `get`).mockResolvedValue(axiosResponse);
    pokemonId = 1;
  });

  it(`should fetch the pokemon for a given id`, async (): Promise<void> => {
    expect.assertions(1);

    await getPokemonById(pokemonId);

    expect(axiosPokemonGetSpy).toHaveBeenCalledExactlyOnceWith(`pokemon/${pokemonId}`);
  });

  describe(`when the pokeapi is up`, (): void => {
    let pokemon: IPokemon;

    beforeEach((): void => {
      pokemon = mock<IPokemon>();
      axiosResponse.data = pokemon;
    });

    it(`should return the correct pokemon for the given id`, async (): Promise<void> => {
      expect.assertions(1);

      const result: IPokemon = await getPokemonById(pokemonId);

      expect(result).toBe(pokemon);
    });
  });

  describe(`when the pokemon failed to be fetched`, (): void => {
    beforeEach((): void => {
      axiosPokemonGetSpy.mockRejectedValue(new Error(`get error`));
    });

    it(`should throw`, async (): Promise<void> => {
      expect.assertions(1);

      await expect(getPokemonById(pokemonId)).rejects.toThrow(new Error(`get error`));
    });
  });
});
