import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Github, Chrome } from 'lucide-react';

const AuthModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-md overflow-hidden rounded-[48px] bg-white p-10 shadow-2xl"
      >
        <button 
           onClick={onClose}
           className="absolute right-8 top-8 p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors"
        >
           <X size={20} className="text-slate-400" />
        </button>

        <div className="text-center mb-10">
           <h2 className="text-3xl font-black text-slate-900 mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
           </h2>
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {mode === 'login' ? 'Great to see you again!' : 'Journey begins here.'}
           </p>
        </div>

        <div className="space-y-6">
           {mode === 'signup' && (
              <div className="relative">
                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                 <input type="text" placeholder="Full Name" className="input-field pl-12" />
              </div>
           )}
           <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="email" placeholder="Email Address" className="input-field pl-12" />
           </div>
           <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="password" placeholder="Password" className="input-field pl-12" />
           </div>

           <button className="w-full py-5 bg-emerald-600 rounded-[28px] font-black text-sm uppercase tracking-widest text-white shadow-xl shadow-emerald-500/20 hover:bg-emerald-700 transition-all">
              {mode === 'login' ? 'Sign In' : 'Sign Up'}
           </button>

           <div className="relative flex items-center gap-4">
              <div className="h-px flex-grow bg-slate-100" />
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">or continue with</span>
              <div className="h-px flex-grow bg-slate-100" />
           </div>

           <div className="flex gap-4">
              <button className="flex-1 py-4 border border-slate-100 rounded-[20px] flex items-center justify-center hover:bg-slate-50 transition-all">
                 <Chrome size={20} className="text-slate-900" />
              </button>
              <button className="flex-1 py-4 border border-slate-100 rounded-[20px] flex items-center justify-center hover:bg-slate-50 transition-all">
                 <Github size={20} className="text-slate-900" />
              </button>
           </div>
        </div>

        <p className="mt-10 text-center text-xs font-bold text-slate-400">
           {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
           <button 
             onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
             className="ml-2 text-emerald-600 font-black uppercase tracking-widest hover:underline"
           >
              {mode === 'login' ? 'Sign Up' : 'Sign In'}
           </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthModal;
