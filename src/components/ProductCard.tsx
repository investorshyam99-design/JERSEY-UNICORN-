import { useState } from 'react';
import { Product, formatPrice } from '../constants';
import { ProductModal } from './ProductModal';

export const ProductCard = ({ product }: { product: Product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-3xl p-4 flex flex-col border border-brand-brown/10 shadow-sm w-full h-full group cursor-pointer hover:shadow-md transition-shadow relative"
      >
        <div className="relative h-64 md:h-72 w-full bg-[#E8E1D5] rounded-2xl mb-4 overflow-hidden">
          <div className="absolute z-10 top-3 left-3 flex flex-col gap-1">
            <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-brand-brown uppercase tracking-widest shadow-sm">
              {product.category.replace('_', ' ')}
            </span>
            {product.tags && product.tags.map(tag => (
              <span key={tag} className="bg-[#FF4444] px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-sm tracking-tight text-brand-brown leading-snug pr-2">
              {product.name}
            </h3>
            <span className="font-black text-sm text-brand-brown">
              {formatPrice(product.price)}
            </span>
          </div>
          
          <div className="flex justify-between items-center mb-4 mt-auto">
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Premium Collection</p>
            <p className="text-[10px] text-[#FF4444] font-bold uppercase tracking-tighter">No Returns</p>
          </div>
          
          <button 
            className="w-full py-3 rounded-xl bg-brand-brown/5 text-brand-brown text-xs font-bold transition-colors mt-auto group-hover:bg-brand-brown group-hover:text-white"
          >
            VIEW DETAILS
          </button>
        </div>
      </div>

      <ProductModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
