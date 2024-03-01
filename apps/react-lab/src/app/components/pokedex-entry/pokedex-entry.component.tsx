import { useQuery } from '@tanstack/react-query';
import { VtmnCard, VtmnSkeleton } from '@vtmn/react';
import classNames from 'classnames/bind';
import { PokedexEntryError } from '../error/pokedex-entry-error/pokedex-entry-error.component';
import { PokemonTypeTag } from '../pokemon-type-tag/pokemon-type-tag';
import styles from './pokedex-entry.module.scss';
import { IPokemonType, getPokemon } from '@lab/data-access-pokemon';

interface IProps {
  readonly url: string;
  readonly name: string;
}
export function PokedexEntry({ url, name }: IProps): React.JSX.Element {
  const cx = classNames.bind(styles);

  const {
    data: pokemon,
    status,
    error,
  } = useQuery({
    staleTime: Infinity,
    queryKey: ['pokemon', name],
    queryFn: () => getPokemon(url),
  });

  switch (status) {
    case 'error':
      return <PokedexEntryError error={error} />;
    case 'pending':
      return (
        <VtmnCard title="" variant="side-image" className={cx('pokedex-card')} img={<VtmnSkeleton shape="avatar" />}>
          <VtmnSkeleton />
          <VtmnSkeleton />
        </VtmnCard>
      );
    case 'success':
      return (
        <VtmnCard
          title={pokemon.name.toUpperCase()}
          img={<img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />}
          variant="side-image"
          className={cx('pokedex-card')}
        >
          <ul className={cx('pokedex-card__types')}>
            {pokemon.types.map((type: IPokemonType) => (
              <PokemonTypeTag key={type.type.name} type={type.type.name} />
            ))}
          </ul>
        </VtmnCard>
      );
  }
}
