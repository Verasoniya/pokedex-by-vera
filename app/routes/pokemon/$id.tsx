import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate, useNavigation, useParams, useRoutes } from 'react-router';
import EvolutionChain from '~/components/evolution-chain';
import Loading from '~/components/loading';
import StatsBar from '~/components/stats-bar';
import TypeBadge from '~/components/type-badge';
import { usePokemonDetail } from '~/hooks/usePokemonDetail';
import { usePokemonEvolution } from '~/hooks/usePokemonEvolution';
import { usePokemonSpecies } from '~/hooks/usePokemonSpecies';
import { parseEvolutionChain } from '~/utils/evolution-chain';

const PokemonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = usePokemonDetail(id);
  const { data: species } = usePokemonSpecies(id);
  const { data: evolutionData, isLoading: isEvolutionLoading } =
    usePokemonEvolution(species?.evolution_chain?.url);

  if (isLoading) return <Loading />;

  const evolutions = evolutionData
    ? parseEvolutionChain(evolutionData.chain)
    : [];

  const handleBack = () => {
    navigate('/', { replace: true });
  };

  console.log('evvv dataaa', evolutions);

  return (
    <main className="px-4 lg:px-10 py-6 space-y-10">
      <section className="flex flex-col lg:flex-row gap-10 items-center ">
        <button
          onClick={handleBack}
          className="flex items-center self-start text-sm font-medium gap-1 bg-secondary-yellow/10 border border-secondary-yellow px-3 py-1 rounded-full cursor-pointer hover:scale-[1.05]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="relative">
          <img
            src="/assets/svg/pokeball-line.svg"
            className=""
            alt="pokeball-line"
          />

          <img
            src={data?.sprites?.other?.['official-artwork']?.front_default}
            className="absolute left-1/2 top-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 animate-poke-enter -hover:scale-[1.1]"
            alt={data.name}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1 w-full lg:w-auto">
          <div className="">
            <h1 className="text-4xl font-bold font-bricolage capitalize">
              {data?.name || ''}
            </h1>

            <p className="text-primary-yellow">
              #{String(data?.id).padStart(3, '0') || ''}
            </p>

            <div className="flex gap-2 mt-3">
              {data?.types?.map((item: any, id: number) => (
                <TypeBadge key={id} type={item?.type?.name} />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-tertiary-green/20 rounded-lg p-2 border border-tertiary-green space-y-0.5">
              <h2 className="text-lg font-medium">Abilities</h2>

              <div className="flex gap-2 flex-wrap">
                {data?.abilities?.map((a: any) => (
                  <span
                    key={a.ability.name}
                    className="px-3 py-1 text-xs bg-secondary-yellow/30 text-primary-yellow rounded capitalize"
                  >
                    {a.ability.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-secondary-yellow/20 rounded-lg p-2 border border-secondary-yellow flex gap-6 flex-wrap items-center">
              <div className="flex gap-2 items-center">
                <h2 className="text-sm font-medium">Weight:</h2>

                <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded">
                  {data?.weight / 10} kg
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <h2 className="text-sm font-medium">Height:</h2>

                <span className="px-3 py-1 text-xs bg-purple-200 text-purple-800 rounded">
                  {data?.height / 10} m
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
        {isEvolutionLoading ? (
          <Loading />
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">Evolution Chain</h2>
            <div className="py-2 px-3 lg:py-4 lg:px-6 rounded-2xl border-2 border-secondary-yellow flex items-center justify-center">
              <EvolutionChain evolutions={evolutions} />
            </div>
          </div>
        )}
        <div>
          <h2 className="text-xl font-semibold mb-4">Base Stats</h2>

          <div className="space-y-3">
            {data?.stats?.map((s: any) => (
              <StatsBar
                key={s.stat.name}
                label={s.stat.name}
                value={s.base_stat}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PokemonDetail;
