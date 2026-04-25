import { useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS, Category, CATEGORY_LABELS } from '../constants';
import { ProductCard } from './ProductCard';

type ProductGridProps = {
  title?: string;
  filterTag?: string; // e.g. "Trending", "Best Seller"
};

export const ProductGrid = ({ title, filterTag }: ProductGridProps) => {
  const categoriesList: { label: string; value: Category }[] = Object.keys(CATEGORY_LABELS).map((key) => ({
    label: CATEGORY_LABELS[key as Category],
    value: key as Category
  }));
  
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');

  let filteredProducts = PRODUCTS;
  
  if (filterTag) {
    filteredProducts = filteredProducts.filter(p => p.tags && p.tags.includes(filterTag));
  } else if (activeCategory !== 'ALL') {
    filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
  }

  return (
    <section id={filterTag ? filterTag.toLowerCase().replace(' ', '-') : 'collection'} className="w-full">
      <div className="w-full">
        {/* Filter / Header Bento Box */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-4 gap-6 bg-white rounded-3xl p-6 md:p-8 border border-brand-brown/10 shadow-sm">
          <div className="max-w-xl">
            <h2 className="font-black text-3xl md:text-4xl text-brand-brown tracking-tighter uppercase mb-2">
              {title || "Latest Arrivals"}
            </h2>
            <p className="font-serif italic text-brand-brown/70 text-sm md:text-base">
              Strictly prepaid. No COD.
            </p>
          </div>

          {!filterTag && (
            <div className="flex flex-wrap gap-2 md:gap-3">
              {categoriesList.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border rounded-xl ${
                    activeCategory === cat.value
                      ? 'bg-brand-brown text-white border-brand-brown'
                      : 'bg-brand-beige/50 text-brand-brown/60 border-brand-brown/10 hover:border-brand-brown/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={`${product.id}-${activeCategory}-${filterTag}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-3xl border border-brand-brown/10 py-20 text-center w-full">
            <p className="text-brand-brown/50 font-serif italic text-xl">More items dropping soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};
