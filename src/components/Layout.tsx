import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-beige p-2 sm:p-4 md:p-6 flex flex-col font-sans text-brand-brown">
      <Navbar />
      <main className="w-full mx-auto flex flex-col gap-4 max-w-[1200px] flex-grow">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
