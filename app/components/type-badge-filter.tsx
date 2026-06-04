import React from 'react';
import { cn } from '~/lib/utils';
import type { TypeFilterProps } from '~/types/pokemon';
import { getPokemonTypeUI } from '~/utils/pokemon-type-ui';

const TypeBadgeFilter = ({ data, onClick, selected }: TypeFilterProps) => {
  const { className, icon: Icon } = getPokemonTypeUI(data?.name);
  return (
    <button
      onClick={onClick}
      className={cn(
        `${className} flex items-center gap-1 px-2 py-1 rounded w-fit cursor-pointer hover:scale-[1.05]`,
        selected && 'bg-primary-green text-white-foreground',
      )}
    >
      {Icon && <Icon className="w-3 h-3" />}
      <p className="text-xs font-medium capitalize">{data?.name}</p>
    </button>
  );
};

export default TypeBadgeFilter;
