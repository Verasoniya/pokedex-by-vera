import { Outlet } from 'react-router';
import Navbar from '~/components/navbar';

function Layout() {
  return (
    <main className="min-h-screen pb-4">
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
