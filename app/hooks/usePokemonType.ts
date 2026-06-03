import { useQuery } from '@tanstack/react-query';
import { getTypeList } from '~/services/pokemon.service';

export const usePokemonTypes = () => {
  return useQuery({
    queryKey: ['pokemon-types'],
    queryFn: getTypeList,
  });
};
