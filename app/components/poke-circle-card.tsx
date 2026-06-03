import React from 'react';

const PokeCircleCard = () => {
  return (
    <button className="w-24 h-24 relative hover:scale-[1.1] cursor-pointer">
      <div className="absolute left-1/2 top-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-yellow" />
      <img
        src="/assets/svg/gap-circle.svg"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src="/assets/image/poke.png"
        className="absolute w-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </button>
  );
};

export default PokeCircleCard;
