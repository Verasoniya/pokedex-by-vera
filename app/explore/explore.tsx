import { Droplets, Search } from 'lucide-react';
import PokeCircleCard from '~/components/poke-circle-card';

export function Explore() {
  return (
    <main className="grid min-h-[calc(100vh-100px)] grid-cols-2 gap-16">
      <div className="flex-1 flex flex-col items-start justify-center ">
        <h1 className="font-bricolage font-extrabold text-8xl text-primary-green">
          Poké<span className="text-secondary-yellow">dex</span>
        </h1>
        <p className="font-medium text-xl w-1/2">
          Discover, explore, collect{' '}
          <span className="text-secondary-yellow">1300+</span> amazing
          Pokémon{' '}
        </p>
        <div className="flex justify-center gap-4 mt-12 mb-9">
          <PokeCircleCard />
        </div>
        <div className="flex items-center gap-4">
          <input
            className="h-9 w-96 py-1 px-4 ring-tertiary-green border border-tertiary-green rounded-full text-primary-green placeholder:text-primary-green text-sm"
            placeholder="Search Pokémon"
          />
          <button className="flex items-center px-4 h-full bg-primary-green rounded-full">
            <Search className="stroke-white-foreground w-5 h-5" />
          </button>
        </div>

        <div className="mt-7">
          <p className="mb-3 font-semibold text-sm text-primary-green">
            Popular Types
          </p>
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 text-blue-900 flex items-center gap-1 px-2 py-1 rounded w-fit">
              <Droplets className="w-3 h-3" size={2} />
              <p className="text-xs font-medium">Water</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="/assets/svg/gap-circle-green-2.svg"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]"
          alt=""
        />

        <img
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
          className="absolute left-1/2 top-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
    </main>
  );
}
