import { useQuery } from '@tanstack/react-query';
import { getPokemonDetail } from '~/services/pokemon.service';

export const usePokemonDetail = (id?: string) => {
  return useQuery({
    queryKey: ['pokemon-detail', id],
    queryFn: () => getPokemonDetail(id!),
    enabled: !!id,
  });
};
