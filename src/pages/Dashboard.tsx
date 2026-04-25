import { motion } from 'motion/react';
import { Package, Heart, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full py-10 flex flex-col gap-4">
      <div className="bg-brand-brown rounded-3xl p-8 md:p-12 text-brand-beige flex justify-between items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
           <div className="text-8xl font-black leading-none text-brand-beige">JU</div>
        </div>
        <div className="relative z-10">
          <p className="text-[10px] font-bold tracking-[0.3em] text-brand-light-brown uppercase mb-2">My Account</p>
          <h1 className="font-black text-4xl md:text-5xl tracking-tighter uppercase mb-4">Dashboard</h1>
          <p className="font-serif italic text-brand-beige/80">Welcome back, User</p>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="relative z-10 flex flex-col items-center gap-2 text-brand-beige/60 hover:text-white transition-colors"
        >
          <LogOut size={24} />
          <span className="text-[10px] uppercase tracking-widest font-bold">Logout</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Orders */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 border border-brand-brown/10 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-brown/10">
            <Package className="text-brand-green" size={24} />
            <h2 className="font-black text-xl uppercase tracking-widest text-brand-brown">Recent Orders</h2>
          </div>
          <div className="flex flex-col items-center justify-center py-10 text-brand-brown/40">
            <Package size={48} className="mb-4 opacity-50" strokeWidth={1} />
            <p className="font-serif italic text-sm">No orders found.</p>
            <p className="text-[10px] uppercase tracking-widest font-bold mt-2">Start shopping to see orders here</p>
          </div>
        </motion.div>

        {/* Saved */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 border border-brand-brown/10 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-brown/10">
            <Heart className="text-[#FF4444]" size={24} />
            <h2 className="font-black text-xl uppercase tracking-widest text-brand-brown">Saved Items</h2>
          </div>
          <div className="flex flex-col items-center justify-center py-10 text-brand-brown/40">
            <Heart size={48} className="mb-4 opacity-50" strokeWidth={1} />
            <p className="font-serif italic text-sm">Your wishlist is empty.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
