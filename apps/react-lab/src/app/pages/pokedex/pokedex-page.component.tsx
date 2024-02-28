import { useInfiniteQuery } from '@tanstack/react-query';
import { VtmnButton } from '@vtmn/react';
import classNames from 'classnames/bind';
import { isNil } from 'lodash';
import { useEffect, useState } from 'react';
import { PokedexError } from '../../components/error/pokedex-error/pokedex-error.component';
import { Loading } from '../../components/loading/loading.component';
import { PageLayout } from '../../components/page-layout/page-layout.component';
import { PokedexEntry } from '../../components/pokedex-entry/pokedex-entry.component';
import styles from './pokedex-page.module.scss';
import { INamedApiResource, IPokeAPiResourceList, getPokemonLitePaginated } from '@lab/data-access-pokemon';

export function PokedexPage(): React.JSX.Element {
  const cx = classNames.bind(styles);
  const [pokemonNames, setPokemonNames] = useState<INamedApiResource[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);

  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    staleTime: Infinity,
    initialPageParam: { limit: 20, offset: 0 },
    queryKey: ['allPokemon'],
    queryFn: getPokemonLitePaginated,
    getNextPageParam: (lastPage: IPokeAPiResourceList) => {
      const params: URLSearchParams = new URL(lastPage.next).searchParams;
      const offset: string | null = params.get('offset');
      const limit: string | null = params.get('limit');
      if (offset && limit) {
        return { limit: parseInt(limit), offset: parseInt(offset) };
      } else {
        return null;
      }
    },
  });

  const handleClick = (): void => {
    fetchNextPage().then(() => setPageCount(prevState => prevState + 1));
  };

  useEffect((): void => {
    if (data) {
      setPokemonNames(previousValue => [...previousValue, ...data.pages.at(pageCount).results]);
    }
  }, [data, pageCount]);

  const content = (): React.JSX.Element => {
    if (isLoading) {
      return <Loading />;
    } else if (error || isNil(data)) {
      return (
        <div className={cx('test')}>
          <PokedexError error={error}></PokedexError>
        </div>
      );
    } else {
      return (
        <>
          <div className={cx('pokedex__container')}>
            {pokemonNames.map((pokemon: INamedApiResource, pokemonIdx: number) => (
              <PokedexEntry key={`pokemon-${pokemonIdx}`} name={pokemon.name} />
            ))}
          </div>

          <div className={cx('load-more--button')}>
            <VtmnButton onClick={() => handleClick()} disabled={!hasNextPage || isFetchingNextPage}>
              {isFetching ? 'Loading more...' : hasNextPage ? 'Load more' : 'Nothing more to fetch'}
            </VtmnButton>
          </div>
        </>
      );
    }
  };

  return <PageLayout title={'Pokedex'}>{content()}</PageLayout>;
}
