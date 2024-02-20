import { useQuery } from '@tanstack/react-query';
import { VtmnSkeleton } from '@vtmn/react';
import classNames from 'classnames/bind';
import styles from './pokedex-entry.module.scss';
import { getPokemonByName } from '@lab/data-access-pokemon';

interface IProps {
  name: string;
}
export function PokedexEntry({ name }: IProps): React.JSX.Element {
  const cx = classNames.bind(styles);

  const { data: pokemon, isLoading } = useQuery({
    staleTime: Infinity,
    queryKey: ['pokemon', name],
    queryFn: () => getPokemonByName(name),
  });

  return isLoading ? (
    <VtmnSkeleton />
  ) : (
    <div className={cx('pokedex-card')}>
      <div className={'typo_title-5'}>{pokemon.name.toUpperCase()}</div>
      <ul className={cx('pokedex-card__types')}>
        {pokemon.types.map((type, idx) => (
          <li key={`type-${idx}`}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
}
