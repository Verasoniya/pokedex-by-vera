import React from 'react';
import CommonCard from './common-card';

const HeroHome = () => {
  return (
    <button className="relative cursor-pointer ">
      <img
        style={{ imageRendering: 'auto' }}
        src="/assets/svg/gap-circle-green-2.svg"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]"
        alt=""
      />

      <img
        style={{ imageRendering: 'auto' }}
        src="/assets/svg/gap-circle-green.svg"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_2s_linear_infinite_reverse]"
        alt=""
      />

      <img
        src="/assets/svg/pokeball-line.svg"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        alt=""
      />

      <img
        src="/assets/image/poke.png"
        className="absolute left-1/2 top-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 animate-poke-enter -hover:scale-[1.1]"
        alt=""
      />
      <CommonCard />
    </button>
  );
};

export default HeroHome;
