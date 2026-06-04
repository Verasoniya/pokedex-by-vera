import { useQuery } from '@tanstack/react-query';
import { getPokemonSpecies } from '~/services/pokemon.service';

export const usePokemonSpecies = (id?: string) => {
  return useQuery({
    queryKey: ['pokemon-species', id],
    queryFn: () => getPokemonSpecies(id!),
    enabled: !!id,
  });
};
