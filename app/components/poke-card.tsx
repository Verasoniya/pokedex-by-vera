import React from 'react';
import TypeBadge from './type-badge';
import { Heart } from 'lucide-react';

const PokeCard = () => {
  return (
    <button
      onClick={() => {
        alert('hohoho');
      }}
      className="w-full bg-card h-80 rounded-2xl p-2 flex flex-col cursor-pointer justify-end relative hover:scale-[1.06]"
      style={{
        boxShadow: '0px 0px 4px 0px #F4B942, 0px 4px 0px 0px #F4B942',
      }}
    >
      <div className="w-full bg-white h-2/3 rounded-xl flex flex-col px-2 py-3 items-start justify-end">
        <h6 className="text-xs font-normal text-primary-yellow">#0032</h6>
        <h6 className="text-xl font-semibold text-foreground">Sandslash</h6>
        <TypeBadge />
      </div>
      <button
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
        alt="sandslash"
        className="w-28 h-auto absolute top-1/5 left-1/2 -translate-x-1/2"
      />

      <img
        src="/assets/image/poke.png"
        alt="sandslash"
        className="w-48 h-auto absolute top-5 left-1/2 -translate-x-1/2"
      />
    </button>
  );
};

export default PokeCard;
