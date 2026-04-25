import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const REVIEWS = [
  {
    name: "Alex M.",
    handle: "@alex_m99",
    content: "The quality on the Madrid retro jersey is insane. Fast shipping and the fit is perfect.",
    rating: 5,
  },
  {
    name: "David S.",
    handle: "@ds_baller",
    content: "Best streetwear football brand right now. Material feels premium compared to others.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    handle: "@marcus_t",
    content: "Ordered the Arsenal away kit. Communication on WhatsApp was super smooth.",
    rating: 5,
  }
];

export const Reviews = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-3 bg-white rounded-3xl p-6 px-8 border border-brand-brown/10 shadow-sm flex items-center justify-between">
            <h3 className="font-black text-2xl text-brand-brown uppercase">Trust</h3>
            <span className="text-[10px] font-bold tracking-widest text-brand-light-brown uppercase">From the community</span>
        </div>
        {REVIEWS.map((review, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`p-6 rounded-3xl border border-brand-brown/5 shadow-sm flex flex-col justify-between ${i === 1 ? 'bg-brand-brown text-brand-beige' : 'bg-white text-brand-brown'}`}
          >
            <div>
              <div className="flex text-brand-light-brown mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" strokeWidth={0} className="mr-0.5" />
                ))}
              </div>
              <p className={`font-serif italic text-sm leading-relaxed mb-6 ${i === 1 ? 'text-brand-beige/90' : 'text-brand-brown/80'}`}>
                "{review.content}"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${i === 1 ? 'bg-brand-beige/20' : 'bg-brand-brown/10'}`}></div>
              <div>
                <p className="font-bold text-[10px] uppercase tracking-widest">
                  {review.name} <span className="opacity-50 ml-1">{review.handle}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
