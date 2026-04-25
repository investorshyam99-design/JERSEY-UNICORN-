import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_GROUP_LINK } from '../constants';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end p-6 md:p-10 rounded-3xl overflow-hidden bg-brand-brown group">
      <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10 pointer-events-none">
        <div className="text-9xl md:text-[180px] font-black leading-none text-brand-beige">JU</div>
      </div>
      <div className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-40 transition-opacity duration-700">
        <img 
          src="https://images.unsplash.com/photo-1518091043644-c1d44570a2f1?q=80&w=2000&auto=format&fit=crop" 
          alt="Football player adjusting jersey" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-brand-brown/60 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-start text-left mt-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-light-brown text-[10px] md:text-xs font-bold tracking-[0.4em] mb-4 uppercase"
        >
          Premium Football Jerseys for True Fans
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-beige font-black text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter uppercase mb-8"
        >
          Wear Your <br /> Passion
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I'm%20interested%20in%20your%20premium%20jerseys.`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-10 py-4 bg-brand-green text-white rounded-full font-bold text-sm hover:scale-105 transition-transform uppercase tracking-widest whitespace-nowrap"
          >
            ORDER NOW ON WHATSAPP
          </a>
          
          <a 
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-10 py-4 border border-brand-beige/30 text-brand-beige rounded-full font-bold text-sm hover:bg-brand-beige/10 transition-colors uppercase tracking-widest whitespace-nowrap"
          >
            <MessageCircle size={18} />
            Join WhatsApp Group
          </a>
        </motion.div>
      </div>
    </section>
  );
};
