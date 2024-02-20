import { IPokemonLite } from './pokemon-lite.interface';

export interface IPokemonLitePaginated {
  readonly count: number;
  readonly next: string;
  readonly previous: number;
  readonly results: IPokemonLite[];
}
