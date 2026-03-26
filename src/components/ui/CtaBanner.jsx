import { motion } from 'framer-motion';

const CtaBanner = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[48px] p-12 md:p-24 text-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[100px] -ml-48 -mb-48" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">Ready to Start Your <span className="text-emerald-400">Next Adventure?</span></h2>
            <p className="text-slate-400 font-medium text-lg mb-12">Join thousands of travelers who have explored the beautiful valleys of Pakistan with us.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-2xl bg-white/10 border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-emerald-400 min-w-[300px]"
              />
              <button className="rounded-2xl bg-emerald-600 px-8 py-4 font-black text-white hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                Subscribe Now
              </button>
            </div>
            
            <p className="mt-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">No credit card required • Unsubscribe anytime</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
