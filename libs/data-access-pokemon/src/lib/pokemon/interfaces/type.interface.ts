import { INamedApiResource } from '../../shared';

export interface IPokemonType {
  readonly slot: number;
  readonly type: INamedApiResource;
}
