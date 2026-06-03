import { Explore } from '~/explore/explore';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pokédex by Vera' },
    { name: 'description', content: 'Welcome to Pokédex!' },
  ];
}

export default function Home() {
  return <Explore />;
}
