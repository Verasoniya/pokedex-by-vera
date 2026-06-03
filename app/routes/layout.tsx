import { Outlet } from 'react-router';
import Navbar from '~/components/navbar';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pokédex by Vera' },
    { name: 'description', content: 'Welcome to Pokédex!' },
  ];
}

function Layout() {
  return (
    <main className="min-h-screen pb-20">
      <div className="flex flex-col gap-4">
        <Navbar />
        <section className="flex-1 px-20">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default Layout;
