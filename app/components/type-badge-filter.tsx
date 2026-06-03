import React from 'react';
import type { DataProps } from '~/types/pokemon';
import { getPokemonTypeUI } from '~/utils/pokemon-type-ui';

const TypeBadgeFilter = ({ data }: DataProps) => {
  const { className, icon: Icon } = getPokemonTypeUI(data?.name);
  return (
    <div
      className={`${className} flex items-center gap-1 px-2 py-1 rounded w-fit bg-`}
    >
      {Icon && <Icon className="w-3 h-3" />}
      <p className="text-xs font-medium capitalize">{data?.name}</p>
    </div>
  );
};

export default TypeBadgeFilter;
