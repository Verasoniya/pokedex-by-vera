import { POKEMON_TYPE_ICON } from '~/constants/pokemon-type-icon';

export const getPokemonTypeUI = (type?: string) => {
  if (!type) {
    return {
      className: 'bg-gray-100 text-gray-800',
      icon: null,
    };
  }

  return (
    POKEMON_TYPE_ICON[type.toLowerCase()] ?? {
      className: 'bg-gray-100 text-gray-800',
      icon: null,
    }
  );
};
