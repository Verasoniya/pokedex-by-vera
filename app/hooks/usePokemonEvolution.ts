import { useQuery } from '@tanstack/react-query';
import { getEvolutionChain } from '~/services/pokemon.service';

export const usePokemonEvolution = (url?: string) => {
  return useQuery({
    queryKey: ['pokemon-evolution', url],
    queryFn: () => getEvolutionChain(url!),
    enabled: !!url,
  });
};
