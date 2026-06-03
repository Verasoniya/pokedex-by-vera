import { Outlet } from 'react-router';
import Navbar from '~/components/navbar';
import type { Route } from './+types/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pokédex by Vera' },
    { name: 'description', content: 'Welcome to Pokédex!' },
  ];
}

const queryClient = new QueryClient();
function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen pb-20">
        <div className="flex flex-col gap-4">
          <Navbar />
          <section className="flex-1 px-4 md:px-10 lg:px-20">
            <Outlet />
          </section>
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default Layout;
