import { IPokemonSprite } from './sprite.interface';
import { IPokemonType } from './type.interface';

export interface IPokemon {
  readonly name: string;
  readonly types: Array<IPokemonType>;
  readonly sprites: IPokemonSprite;
}
