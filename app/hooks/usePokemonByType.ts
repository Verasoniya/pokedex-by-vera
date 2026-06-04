import { useQuery } from '@tanstack/react-query';
import { getPokemonByType } from '~/services/pokemon.service';

export const usePokemonByType = (type: string) => {
  return useQuery({
    queryKey: ['pokemon-type', type],
    queryFn: () => getPokemonByType(type),
    enabled: !!type && type !== 'All',
  });
};
