import { INSTAGRAM_LINK } from '../constants';

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1577223625816-7546f13ee250?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552318409-e85d8868fed2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1627945037985-797f1f0a5be7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=600&auto=format&fit=crop",
];

export const Gallery = () => {
  return (
    <section className="w-full bg-white rounded-3xl p-6 md:p-8 border border-brand-brown/10 shadow-sm flex flex-col justify-between overflow-hidden">
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-brand-brown/10 pb-6 w-full">
        <div>
           <div className="text-[10px] font-bold text-brand-brown/40 mb-2 tracking-[0.2em] uppercase">INSTAGRAM FEED</div>
           <h2 className="font-black text-2xl md:text-4xl text-brand-brown tracking-tighter uppercase mb-2">
             Follow The Movement
           </h2>
           <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="font-serif italic text-brand-green text-sm hover:underline">
             @jerseyunicorn_
           </a>
        </div>
        <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="hidden md:inline-block font-bold text-[10px] uppercase tracking-widest text-brand-brown hover:text-brand-green transition-colors mt-4 md:mt-0">
          Join the community
        </a>
      </div>

      <div className="w-full">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4">
           {GALLERY_IMAGES.map((img, i) => (
             <div key={i} className="relative flex-none w-[60vw] sm:w-[40vw] md:w-[25vw] max-w-[300px] aspect-[4/5] snap-center rounded-2xl overflow-hidden bg-brand-beige">
               <img 
                 src={img} 
                 alt={`Gallery ${i}`} 
                 className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-brand-brown/5 hover:bg-transparent transition-colors duration-500"></div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
