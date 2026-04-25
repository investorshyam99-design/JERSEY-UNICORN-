import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Product, getWhatsAppLink, formatPrice, SIZES } from '../constants';

export const ProductModal = ({ product, isOpen, onClose }: { product: Product, isOpen: boolean, onClose: () => void }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.imageUrl];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-brown/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur rounded-full text-brand-brown hover:bg-white transition-colors"
          >
            <X size={20} />
          </button>

          {/* Image Gallery */}
          <div className="w-full md:w-1/2 relative bg-brand-beige h-64 md:h-auto">
            <img 
              src={images[currentImageIndex]} 
              alt={`${product.name} - view ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover"
            />
            
            {images.length > 1 && (
              <>
                <button onClick={handlePrevImage} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full text-brand-brown hover:bg-white transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={handleNextImage} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full text-brand-brown hover:bg-white transition-colors">
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-y-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-brand-brown' : 'bg-white/50 border border-brand-brown/20'}`} />
                  ))}
                </div>
              </>
            )}
            
            {product.tags && product.tags.length > 0 && (
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold bg-[#FF4444] text-white px-3 py-1 rounded-md uppercase tracking-widest shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
            <div className="mb-2">
               <span className="text-[10px] font-bold text-brand-brown/40 uppercase tracking-widest">{product.category.replace('_', ' ')}</span>
            </div>
            <h2 className="font-black text-2xl md:text-3xl lg:text-4xl text-brand-brown uppercase tracking-tighter mb-2 leading-none">
              {product.name}
            </h2>
            <p className="text-xl md:text-2xl font-serif italic text-brand-green mb-6">
              {formatPrice(product.price)}
            </p>

            <div className="mb-6">
              <div className="flex justify-between items-end mb-3">
                <span className="text-[10px] font-bold text-brand-brown uppercase tracking-widest">Select Size</span>
                <button className="text-[10px] font-bold text-brand-brown/60 hover:text-brand-green uppercase tracking-widest transition-colors underline">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {SIZES.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-bold transition-all border rounded-xl ${
                      selectedSize === size 
                      ? 'bg-brand-brown text-white border-brand-brown scale-105' 
                      : 'bg-brand-beige/30 text-brand-brown border-brand-brown/10 hover:border-brand-brown/40'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <a 
                href={selectedSize ? getWhatsAppLink(product.name, selectedSize) : '#'}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (!selectedSize) {
                    e.preventDefault();
                    alert("Please select a size first.");
                  }
                }}
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all ${
                  selectedSize 
                  ? 'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-lg' 
                  : 'bg-brand-beige text-brand-brown/40 cursor-not-allowed'
                }`}
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>
              
              <div className="bg-brand-brown/5 rounded-xl p-4 flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-brown/60">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#FF4444]"></div>
                   Strictly Prepaid Only. No COD.
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-brown/60">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#FF4444]"></div>
                   No Returns or Exchanges.
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-brown/60">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                   Delivery in 5-10 Days.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
