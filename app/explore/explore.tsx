import { Droplets } from 'lucide-react';
import HeroHome from '~/components/hero-home';
import PokeCircleCard from '~/components/poke-circle-card';
import SearchInput from '~/components/search';
import TypeBadge from '~/components/type-badge';

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
        <SearchInput />

        <div className="mt-7">
          <p className="mb-3 font-semibold text-sm text-primary-green">
            Popular Types
          </p>
          <div className="flex items-center gap-2">
            <TypeBadge />
          </div>
        </div>
      </div>
      <HeroHome />
    </main>
  );
}
