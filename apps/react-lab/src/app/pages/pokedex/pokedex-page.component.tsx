import { useInfiniteQuery } from '@tanstack/react-query';
import { VtmnButton } from '@vtmn/react';
import classNames from 'classnames/bind';
import { Loading } from '../../components/loading/loading.component';
import { PageLayout } from '../../components/page-layout/page-layout.component';
import { PokedexEntry } from '../../components/pokedex-entry/pokedex-entry.component';
import styles from './pokedex-page.module.scss';
import { IPokemonLite, IPokemonLitePaginated, getPokemonLitePaginated } from '@lab/data-access-pokemon';

export function PokedexPage(): React.JSX.Element {
  const cx = classNames.bind(styles);

  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery({
      staleTime: Infinity,
      initialPageParam: { limit: 20, offset: 0 },
      queryKey: ['allPokemon'],
      queryFn: getPokemonLitePaginated,
      getNextPageParam: (lastPage: IPokemonLitePaginated) => {
        const params = new URL(lastPage.next).searchParams;
        const offset = params.get('offset');
        const limit = params.get('limit');
        if (offset && limit) {
          return { limit: parseInt(limit), offset: parseInt(offset) };
        } else {
          return null;
        }
      },
    });

  return (
    <PageLayout title={'Pokedex'}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data.pages.map((page: IPokemonLitePaginated, pageIdx: number) => (
            <div className={cx('pokedex__container')} key={`page-${pageIdx}`}>
              {page.results.map((pokemon: IPokemonLite, pokemonIdx: number) => (
                <PokedexEntry key={`pokemon-${pokemonIdx}`} name={pokemon.name} />
              ))}
            </div>
          ))}
          <div className={cx('load-more--button')}>
            <VtmnButton onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
              {isFetching ? 'Loading more...' : hasNextPage ? 'Load more' : 'Nothing more to fetch'}
            </VtmnButton>
          </div>
        </>
      )}
    </PageLayout>
  );
}
