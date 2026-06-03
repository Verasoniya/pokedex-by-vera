import { useInfiniteQuery } from '@tanstack/react-query';
import { getPokemonList } from '~/services/pokemon.service';

export const usePokemonList = () => {
  return useInfiniteQuery({
    queryKey: ['pokemon'],
    queryFn: ({ pageParam = 0 }) => getPokemonList(pageParam),

    initialPageParam: 0,

    getNextPageParam: (lastPage) => {
      const next = lastPage.next;

      if (!next) return undefined;

      const url = new URL(next);

      return Number(url.searchParams.get('offset'));
    },
  });
};
