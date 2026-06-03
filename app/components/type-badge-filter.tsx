import { Droplets } from 'lucide-react';
import React from 'react';

const TypeBadgeFilter = () => {
  return (
    <div className="bg-blue-100 text-blue-900 flex items-center gap-1 px-2 py-1 rounded w-fit">
      <Droplets className="w-3 h-3" size={2} />
      <p className="text-xs font-medium">Water</p>
    </div>
  );
};

export default TypeBadgeFilter;
