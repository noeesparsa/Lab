import { useQuery } from '@tanstack/react-query';
import { VtmnCard, VtmnSkeleton } from '@vtmn/react';
import classNames from 'classnames/bind';
import { PokemonTypeTag } from '../pokemon-type-tag/pokemon-type-tag';
import styles from './pokedex-entry.module.scss';
import { IPokemonType, getPokemonByName } from '@lab/data-access-pokemon';

interface IProps {
  readonly name: string;
}
export function PokedexEntry({ name }: IProps): React.JSX.Element {
  const cx = classNames.bind(styles);

  const { data: pokemon, isLoading } = useQuery({
    staleTime: Infinity,
    queryKey: ['pokemon', name],
    queryFn: () => getPokemonByName(name),
  });

  if (isLoading) {
    return <VtmnSkeleton className={cx('pokedex-card__loading')} />;
  } else {
    return (
      <VtmnCard
        title={pokemon.name.toUpperCase()}
        img={<img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />}
        variant="side-image"
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
