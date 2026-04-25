import { CATEGORY_LABELS, Category } from '../constants';
import { motion } from 'motion/react';

export const CategoriesGrid = () => {
  const categories = Object.keys(CATEGORY_LABELS).filter(k => k !== 'ALL') as Category[];

  return (
    <section id="categories" className="w-full bg-white rounded-3xl p-6 md:p-8 border border-brand-brown/10 shadow-sm flex flex-col justify-between">
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-brand-brown/10 pb-6 w-full">
        <div>
           <div className="text-[10px] font-bold text-brand-brown/40 mb-2 tracking-[0.2em] uppercase">EXPLORE</div>
           <h2 className="font-black text-2xl md:text-3xl text-brand-brown tracking-tighter uppercase">
             Categories
           </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="group relative h-32 md:h-40 rounded-2xl overflow-hidden bg-brand-beige flex items-center justify-center p-4 border border-brand-brown/5 hover:border-brand-brown/20 transition-colors"
          >
            <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-brand-green/10 transition-colors"></div>
            <h3 className="relative z-10 font-bold text-center text-sm md:text-base text-brand-brown uppercase tracking-widest px-2">{CATEGORY_LABELS[cat]}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
