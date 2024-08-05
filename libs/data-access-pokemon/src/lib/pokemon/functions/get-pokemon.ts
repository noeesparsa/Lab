import { getDataFromPokeapi } from '../../shared';
import { IPokemon } from '../interfaces';

/**
 * Return a Pokémon base on a given url.
 * @returns IPokemon.
 */
export async function getPokemon(url: string): Promise<IPokemon> {
  return getDataFromPokeapi<IPokemon>(url);
}
