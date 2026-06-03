import {
  Flame,
  Droplets,
  Zap,
  Leaf,
  Snowflake,
  Hand,
  Skull,
  Mountain,
  Wind,
  Brain,
  Bug,
  Gem,
  Ghost,
  Swords,
  Dna,
  Shield,
  Sparkles,
  Moon,
  SquareDashed,
  Rocket,
  Brackets,
  Circle,
} from 'lucide-react';

export const POKEMON_TYPE_ICON: Record<
  string,
  { className: string; icon: any }
> = {
  all: { className: 'bg-teal-200 text-teal-800', icon: Circle },
  normal: {
    className: 'bg-brown-200 text-brown-800',
    icon: Shield,
  },
  fire: {
    className: 'bg-red-200 text-red-900',
    icon: Flame,
  },
  water: {
    className: 'bg-blue-200 text-blue-900',
    icon: Droplets,
  },
  electric: {
    className: 'bg-yellow-200 text-yellow-900',
    icon: Zap,
  },
  grass: {
    className: 'bg-green-200 text-green-900',
    icon: Leaf,
  },
  ice: {
    className: 'bg-cyan-200 text-cyan-900',
    icon: Snowflake,
  },
  fighting: {
    className: 'bg-orange-200 text-orange-900',
    icon: Hand,
  },
  poison: {
    className: 'bg-fuchsia-200 text-fuchsia-900',
    icon: Skull,
  },
  ground: {
    className: 'bg-amber-200 text-amber-900',
    icon: Mountain,
  },
  flying: {
    className: 'bg-indigo-200 text-indigo-900',
    icon: Wind,
  },
  psychic: {
    className: 'bg-pink-200 text-pink-900',
    icon: Brain,
  },
  bug: {
    className: 'bg-lime-200 text-lime-900',
    icon: Bug,
  },
  rock: {
    className: 'bg-stone-200 text-stone-900',
    icon: Gem,
  },
  ghost: {
    className: 'bg-purple-200 text-purple-900',
    icon: Ghost,
  },
  dragon: {
    className: 'bg-violet-200 text-violet-900',
    icon: Dna,
  },
  dark: {
    className: 'bg-zinc-800 text-zinc-100',
    icon: Moon,
  },
  steel: {
    className: 'bg-slate-200 text-slate-900',
    icon: Swords,
  },
  fairy: {
    className: 'bg-rose-200 text-rose-900',
    icon: Sparkles,
  },
  unknown: {
    className: 'bg-gray-200 text-gray-800',
    icon: Brackets,
  },
  shadow: {
    className: 'bg-yellow-200 text-yellow-800',
    icon: SquareDashed,
  },
  stellar: {
    className: 'bg-purple-200 text-purple-800',
    icon: Rocket,
  },
};
