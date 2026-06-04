import React from 'react';
import CommonCard from './common-card';
import type { DataProps } from '~/types/pokemon';

const HeroHome = ({ data }: DataProps) => {
  return (
    <button className="relative cursor-pointer w-full h-full mt-12 lg:mt-0">
      <img
        style={{ imageRendering: 'auto' }}
        src="/assets/svg/gap-circle-green-2.svg"
        className="w-80 h-80 lg:w-auto lg:h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]"
        alt=""
      />

      <img
        style={{ imageRendering: 'auto' }}
        src="/assets/svg/gap-circle-green.svg"
        className="w-64 h-64 lg:w-auto lg:h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_2s_linear_infinite_reverse]"
        alt=""
      />

      <img
        src="/assets/svg/pokeball-line.svg"
        className="w-68 h-68 lg:w-auto lg:h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        alt=""
      />

      {data?.image && (
        <img
          src={data?.image}
          className=" w-80 h-80 absolute left-1/2 top-1/2 lg:w-96 lg:h-96 -translate-x-1/2 -translate-y-1/2 animate-poke-enter -hover:scale-[1.1]"
          alt={data?.name}
        />
      )}

      <CommonCard data={data} />
    </button>
  );
};

export default HeroHome;
