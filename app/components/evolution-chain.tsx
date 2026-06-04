import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

type Props = {
  evolutions: {
    name: string;
    url: string;
    id: string;
  }[];
};

export default function EvolutionChain({ evolutions }: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 overflow-x-auto">
      {evolutions.map((pokemon, index) => {
        const id = pokemon.id;

        return (
          <div key={pokemon.name} className="flex items-center gap-4">
            <button
              onClick={() => navigate(`/pokemon/${id}`)}
              className="flex flex-col items-center gap-2 transition relative"
            >
              <img
                src="/assets/svg/pokeball-line.svg"
                alt="pokeball-yellow"
                className="w-28 h-28 "
              />

              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={pokemon.name}
                className="w-28 h-28 absolute"
              />

              <span className="capitalize font-medium text-primary-green">
                {pokemon.name}
              </span>
            </button>

            {index !== evolutions.length - 1 && (
              <ChevronRight className="text-primary-green" />
            )}
          </div>
        );
      })}
    </div>
  );
}
