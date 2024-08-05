import { INamedApiResource } from './named-api-resource.interface';

export interface IPokeAPiResourceList {
  readonly count: number;
  readonly next: string;
  readonly previous: number;
  readonly results: Array<INamedApiResource>;
}
