import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="sticky top-2 sm:top-4 z-50 flex justify-between items-center bg-white/50 backdrop-blur-md p-4 px-6 rounded-2xl border border-brand-brown/10 max-w-[1200px] w-full mx-auto mb-4 md:mb-6 shadow-sm">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center">
          <button className="md:hidden p-2 -ml-2 text-brand-brown" aria-label="Menu">
            <Menu size={24} />
          </button>
          <div className="hidden md:flex space-x-4 lg:space-x-8 text-[10px] sm:text-[10px] font-bold tracking-widest uppercase">
            <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
            <a href="#collection" className="hover:text-brand-green transition-colors">Shop</a>
            <a href="#categories" className="hover:text-brand-green transition-colors">Categories</a>
          </div>
        </div>
        
        {/* Logo center */}
        <div className="flex-1 flex justify-center items-center">
          <Link to="/" className="font-black text-xl sm:text-2xl tracking-tighter text-brand-brown leading-none flex items-center">
            JERSEY UNICORN
          </Link>
        </div>

        <div className="flex items-center justify-end">
           <div className="hidden md:flex space-x-4 lg:space-x-8 text-[10px] font-bold tracking-widest uppercase items-center">
             <Link to="/login" className="hover:text-brand-green transition-colors hidden lg:block">Login / Signup</Link>
             <a href="#contact" className="hover:text-brand-green transition-colors hidden lg:block">Contact</a>
             <span className="text-[10px] font-bold bg-brand-green text-white px-3 py-1 rounded-full whitespace-nowrap">PREPAID ONLY</span>
           </div>
           
           {/* Mobile Auth/Contact placeholder icon */}
           <div className="md:hidden flex space-x-4 ml-4">
             <Link to="/login" className="text-[10px] uppercase font-bold tracking-widest text-brand-brown">
               LOGIN
             </Link>
           </div>
        </div>
      </div>
    </nav>
  );
};
