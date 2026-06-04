import React from 'react';
import TypeBadge from './type-badge';
import { Heart } from 'lucide-react';
import type { DataProps } from '~/types/pokemon';

const PokeCard = ({ data, onClick }: DataProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-card h-80 rounded-2xl p-2 flex flex-col cursor-pointer justify-end relative hover:scale-[1.06]"
      style={{
        boxShadow: '0px 0px 4px 0px #F4B942, 0px 4px 0px 0px #F4B942',
      }}
    >
      <div className="w-full bg-white h-2/3 rounded-xl flex flex-col px-2 py-3 items-start justify-end">
        <h6 className="text-xs font-normal text-primary-yellow">
          #{String(data?.id).padStart(3, '0')}
        </h6>
        <h6 className="text-xl font-semibold text-foreground capitalize">
          {data?.name}
        </h6>
        <div className="flex items-center gap-1 self-end mt-2">
          {data?.types?.map((type: string, id: number) => (
            <TypeBadge key={id} type={type} />
          ))}
        </div>
      </div>
      <button
        id="like-button"
        onClick={(e) => {
          e.stopPropagation();
          alert('haha');
        }}
        className="absolute top-2 right-3 cursor-pointer hover:scale-[1.1]"
      >
        <Heart className="fill-red stroke-red" />
      </button>

      <img
        src="/assets/svg/pokeball-yellow.svg"
        alt="pokeball-yellow"
        className="w-28 h-auto absolute top-1/5 left-1/2 -translate-x-1/2"
      />

      {data?.image && (
        <img
          src={data?.image}
          alt={data?.name}
          className="w-48 h-auto absolute top-5 left-1/2 -translate-x-1/2"
        />
      )}
    </button>
  );
};

export default PokeCard;
