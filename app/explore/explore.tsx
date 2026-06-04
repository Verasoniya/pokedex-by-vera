import { Droplets, Heart } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import HeroHome from '~/components/hero-home';
import Loading from '~/components/loading';
import PokeCard from '~/components/poke-card';
import PokeCircleCard from '~/components/poke-circle-card';
import SearchInput from '~/components/search';
import TypeBadge from '~/components/type-badge';
import TypeBadgeFilter from '~/components/type-badge-filter';
import { usePokemonByType } from '~/hooks/usePokemonByType';
import { usePokemonList } from '~/hooks/usePokemonList';
import { usePokemonTypes } from '~/hooks/usePokemonType';

export function Explore() {
  const navigate = useNavigate();
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    usePokemonList();
  const { data: dataType } = usePokemonTypes();
  const { data: filteredData, isLoading: isFiltering } = usePokemonByType(
    selectedFilter ?? '',
  );
  // const pokemon = data?.pages.flatMap((page) => page.results) ?? [];

  const pokemon = useMemo(() => {
    if (selectedFilter && selectedFilter !== 'All') {
      return filteredData ?? [];
    }
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [selectedFilter, filteredData, data]);

  const handleSelectFilter = (type: string) => {
    setSelectedFilter(type);
  };

  const handleReset = () => {
    setSelectedFilter(null);
  };

  const handleToDetail = (id: string) => {
    navigate(`/pokemon/${id}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0.5,
      },
    );

    const current = loadMoreRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

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
            {pokemon?.slice(6, 9)?.map((item: any, id: number) => (
              <PokeCircleCard key={id} data={item} />
            ))}
          </div>
          <SearchInput />
        </div>
        {pokemon[4] && <HeroHome data={pokemon[4]} />}
      </section>
      <section id="explore" className="px-2 lg:px-14 py-4 space-y-10">
        <div className="flex flex-col items-start gap-4">
          <h6 className="text-2xl font-semibold text-primary-green capitalize">
            {selectedFilter ? selectedFilter : 'All'} Pokémon
          </h6>
          <div className="">
            <p className="mb-3 font-semibold text-sm text-primary-green">
              Popular Types
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <TypeBadgeFilter
                data={{ name: 'All' }}
                onClick={handleReset}
                selected={selectedFilter === null}
              />
              {dataType?.map((type: any, id: number) => {
                return (
                  <TypeBadgeFilter
                    key={id}
                    data={type}
                    onClick={() => handleSelectFilter(type.name)}
                    selected={selectedFilter === type.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 relative">
          {pokemon?.map((pokemon: any, id: number) => (
            <PokeCard
              key={id}
              data={pokemon}
              onClick={() => handleToDetail(pokemon?.id)}
            />
          ))}
        </div>
        <div
          ref={loadMoreRef}
          className="h-20 mt-10 flex justify-center items-center"
        >
          {isLoading || isFetchingNextPage ? <Loading /> : null}
          {!hasNextPage && !isLoading && (
            <span className="text-base text-primary-green font-medium flex items-center gap-4">
              <hr className="w-40 text-secondary-yellow" />
              You've reached the end of the Pokédex
              <hr className="w-40 text-secondary-yellow" />
            </span>
          )}
        </div>
      </section>
    </main>
  );
}
