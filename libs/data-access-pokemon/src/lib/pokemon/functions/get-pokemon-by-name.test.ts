import { AxiosResponse } from 'axios';
import { IPokemon } from 'pokeapi-typescript';
import { MockInstance } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { AxiosPokemon } from '../../shared';
import { getPokemonByName } from './get-pokemon-by-name';

describe(`getPokemonByName()`, (): void => {
  let axiosPokemonGetSpy: MockInstance;
  let axiosResponse: AxiosResponse<IPokemon>;
  let pokemonName: string;

  beforeEach((): void => {
    axiosResponse = mock<AxiosResponse<IPokemon>>();
    axiosPokemonGetSpy = vi.spyOn(AxiosPokemon, `get`).mockResolvedValue(axiosResponse);
    pokemonName = 'pokemonName';
  });

  it(`should fetch the pokemon for a given name`, async (): Promise<void> => {
    expect.assertions(1);

    await getPokemonByName(pokemonName);

    expect(axiosPokemonGetSpy).toHaveBeenCalledExactlyOnceWith(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  });

  describe(`when the pokeapi is up`, (): void => {
    let pokemon: IPokemon;

    beforeEach((): void => {
      pokemon = mock<IPokemon>();
      axiosResponse.data = pokemon;
    });

    it(`should return the correct pokemon for the given name`, async (): Promise<void> => {
      expect.assertions(1);

      const result: IPokemon = await getPokemonByName(pokemonName);

      expect(result).toBe(pokemon);
    });
  });

  describe(`when the pokemon failed to be fetched`, (): void => {
    beforeEach((): void => {
      axiosPokemonGetSpy.mockRejectedValue(new Error(`get error`));
    });

    it(`should throw`, async (): Promise<void> => {
      expect.assertions(1);

      await expect(getPokemonByName(pokemonName)).rejects.toThrow(new Error(`get error`));
    });
  });
});
