import { WHATSAPP_NUMBER, SUPPORT_PHONE, SUPPORT_EMAIL, INSTAGRAM_LINK } from '../constants';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-brand-brown rounded-3xl p-8 md:p-12 border border-brand-brown/10 shadow-sm">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <h2 className="font-black text-3xl tracking-tighter uppercase mb-6 leading-none">
              JERSEY UNICORN
            </h2>
            <p className="font-sans text-brand-brown/70 text-sm max-w-sm leading-relaxed mb-6">
              Redefining football culture through premium aesthetic streetwear. 
              Elevate your game. Wear your passion.
            </p>
            <div className="inline-flex flex-wrap gap-2">
              <span className="text-[10px] font-bold bg-[#FF4444]/10 text-[#FF4444] px-3 py-1 rounded-md uppercase tracking-widest">
                No COD Available
              </span>
              <span className="text-[10px] font-bold bg-[#FF4444]/10 text-[#FF4444] px-3 py-1 rounded-md uppercase tracking-widest">
                No Returns / Exchanges
              </span>
              <span className="text-[10px] font-bold bg-brand-green/10 text-brand-green px-3 py-1 rounded-md uppercase tracking-widest">
                Prepaid Orders Only
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-black text-[10px] tracking-widest uppercase mb-6 text-brand-brown/50">Orders & Contact</h4>
            <ul className="space-y-4 font-sans text-xs font-bold text-brand-brown/80 uppercase">
               <li>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-brand-green transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <span className="block text-brand-brown/40 text-[10px] mb-1 tracking-widest">Phone</span>
                <a href={`tel:${SUPPORT_PHONE}`} className="hover:text-brand-green transition-colors">
                  {SUPPORT_PHONE}
                </a>
              </li>
              <li>
                <span className="block text-brand-brown/40 text-[10px] mb-1 tracking-widest">Email</span>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-brand-green transition-colors lowercase">
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                <span className="block text-brand-brown/40 text-[10px] mb-1 tracking-widest">Social</span>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="hover:text-brand-green transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-black text-[10px] tracking-widest uppercase mb-6 text-brand-brown/50">Policies</h4>
            <ul className="space-y-4 font-sans text-xs font-bold text-brand-brown/80 uppercase">
              <li className="text-[#FF4444]/80">No Returns</li>
              <li className="text-[#FF4444]/80">No Exchanges</li>
              <li>Delivery: 5-10 Days</li>
              <li>Delivery Charges Apply</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-brown/10 text-[10px] uppercase font-bold text-brand-brown/40 tracking-[0.3em] gap-4 text-center md:text-left">
          <p>JERSEY UNICORN &copy; {new Date().getFullYear()}</p>
          <p>PREPAID ONLY • NO COD • NO RETURNS</p>
        </div>
      </div>
    </footer>
  );
};
