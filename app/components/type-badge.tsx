import React from 'react';
import type { TypeBadgeProps } from '~/types/pokemon';

const TypeBadge = ({ type }: TypeBadgeProps) => {
  return (
    <div className="flex items-center justify-center px-3 py-1 bg-purple-300 rounded-full">
      <p className="text-purple-800 text-xs font-medium">{type || '-'}</p>
    </div>
  );
};

export default TypeBadge;
