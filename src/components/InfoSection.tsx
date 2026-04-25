import { ShieldCheck, Truck, Star } from 'lucide-react';

export const InfoSection = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-brand-light-brown rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white border border-brand-brown/10 shadow-sm relative overflow-hidden">
          <ShieldCheck size={36} className="mb-4 opacity-90" strokeWidth={1.5} />
          <h3 className="text-[10px] font-black uppercase tracking-widest mb-2"><span className="block text-2xl mb-2">💎</span>Premium Quality</h3>
          <p className="text-white/80 text-xs leading-relaxed max-w-xs">
            Expertly crafted with athletic fabrics built for motion.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center text-brand-brown border border-brand-brown/10 shadow-sm">
          <Star size={36} className="mb-4 opacity-80" strokeWidth={1.5} />
          <h3 className="text-[10px] font-black uppercase tracking-widest mb-2"><span className="block text-2xl mb-2">💰</span>Best Prices</h3>
          <p className="text-brand-brown/70 text-xs leading-relaxed max-w-xs">
            Streetwear aesthetics at an accessible price point.
          </p>
        </div>

        <div className="bg-brand-green rounded-3xl p-8 flex flex-col items-center justify-center text-center text-brand-beige border border-brand-brown/10 shadow-sm">
          <Truck size={36} className="mb-4 opacity-80" strokeWidth={1.5} />
          <h3 className="text-[10px] font-black uppercase tracking-widest mb-2"><span className="block text-2xl mb-2">⚡</span>Fast Shipping</h3>
          <p className="text-brand-beige/70 text-xs leading-relaxed max-w-xs">
            Secure delivery. Note: Delivery charges apply, no free shipping.
          </p>
        </div>

      </div>
    </section>
  );
};
