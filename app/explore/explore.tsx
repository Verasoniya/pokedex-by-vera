import { Droplets, Heart } from 'lucide-react';
import HeroHome from '~/components/hero-home';
import PokeCard from '~/components/poke-card';
import PokeCircleCard from '~/components/poke-circle-card';
import SearchInput from '~/components/search';
import TypeBadge from '~/components/type-badge';
import TypeBadgeFilter from '~/components/type-badge-filter';

export function Explore() {
  return (
    <main>
      <section
        id="hero"
        className="grid min-h-[calc(100vh-180px)] grid-cols-2 gap-16"
      >
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
          <SearchInput />

          <div className="mt-7">
            <p className="mb-3 font-semibold text-sm text-primary-green">
              Popular Types
            </p>
            <div className="flex items-center gap-2">
              <TypeBadgeFilter />
            </div>
          </div>
        </div>
        <HeroHome />
      </section>
      <section id="explore" className="px-14 py-4 space-y-4">
        <div className="flex justify-between items-center gap-2">
          <h6 className="text-2xl font-semibold text-primary-green">
            All Pokémon
          </h6>
          <button className="bg-tertiary-green/20 border border-secondary-green px-3 py-1 text-xs text-primary-green rounded-full">
            Sort by Number
          </button>
        </div>
        <div className="grid grid-cols-4 gap-x-10 gap-y-16 relative">
          <PokeCard />
          <PokeCard />
          <PokeCard />
        </div>
      </section>
    </main>
  );
}
