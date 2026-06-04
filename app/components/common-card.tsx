import React from 'react';
import TypeBadge from './type-badge';
import type { DataProps } from '~/types/pokemon';

const CommonCard = ({ data }: DataProps) => {
  return (
    <div
      className="bg-white px-2 md:px-4 py-3 rounded-2xl absolute right-8 -bottom-22 md:bottom-24 flex flex-col items-start gap-1 w-44 md:w-52"
      style={{ boxShadow: '4px 4px 4px 0px #1F2F2066' }}
    >
      <p className="text-xs text-primary-yellow font-normal">
        #{String(data?.id).padStart(3, '0')}
      </p>
      <p className="text-base text-foreground font-semibold mb-1 md:mb-2 capitalize">
        {data?.name}
      </p>

      {data?.types && (
        <div className="flex items-center gap-1 justify-end self-end">
          {data?.types?.map((type: string, id: number) => (
            <TypeBadge key={id} type={type} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonCard;
