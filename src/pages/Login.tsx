import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (e: FormEvent) => {
    e.preventDefault();
    // Dummy authentication
    navigate('/dashboard');
  };

  return (
    <div className="w-full h-full flex items-center justify-center py-10 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl p-8 border border-brand-brown/10 shadow-sm"
      >
        <div className="text-center mb-8">
          <h2 className="font-black text-3xl text-brand-brown tracking-tighter uppercase mb-2">
            {isLogin ? 'Welcome Back' : 'Join the Club'}
          </h2>
          <p className="font-serif italic text-brand-brown/60 text-sm">
            {isLogin ? 'Login to access your orders' : 'Create an account to track orders'}
          </p>
        </div>

        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="block text-[10px] font-bold text-brand-brown/60 uppercase tracking-widest mb-1">Full Name</label>
              <input type="text" required className="w-full border border-brand-brown/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-green bg-brand-beige/20 transition-colors" placeholder="John Doe" />
            </div>
          )}
          <div>
            <label className="block text-[10px] font-bold text-brand-brown/60 uppercase tracking-widest mb-1">Email Address</label>
            <input type="email" required className="w-full border border-brand-brown/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-green bg-brand-beige/20 transition-colors" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-brand-brown/60 uppercase tracking-widest mb-1">Password</label>
            <input type="password" required className="w-full border border-brand-brown/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-green bg-brand-beige/20 transition-colors" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full bg-brand-green text-white py-4 rounded-xl font-bold tracking-widest uppercase text-xs mt-4 hover:bg-brand-green/90 transition-colors">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-[10px] font-bold tracking-widest text-brand-brown/60 hover:text-brand-green uppercase transition-colors"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
