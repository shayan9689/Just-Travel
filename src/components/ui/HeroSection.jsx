import { ArrowRight, MapPin } from 'lucide-react';
import { heroData } from '../../data/travelData';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
        <img 
          src={heroData.image} 
          alt="Pakistani Landscapes" 
          className="h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-white border border-white/20 w-fit">
            <MapPin size={14} className="text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest">Explore the Karakoram</span>
          </div>
          
          <h1 className="text-5xl font-black text-white md:text-7xl leading-[1.1] drop-shadow-2xl">
            {heroData.title}
          </h1>
          
          <p className="mt-6 text-lg text-slate-100 md:text-xl drop-shadow-md max-w-2xl font-medium opacity-90">
            {heroData.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:scale-105 active:scale-95">
              <span>Explore Destinations</span>
              <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white border border-white/30 transition-all hover:bg-white/20 hover:scale-105 active:scale-95">
              <span>View Packages</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Floating Card */}
      <div className="absolute bottom-12 left-0 z-20 w-full hidden lg:block" data-aos="fade-up" data-aos-delay="400">
        <div className="container mx-auto px-6">
          <div className="glass-card max-w-4xl p-8 rounded-3xl flex items-center justify-between gap-8">
            <div className="flex-1 border-r border-slate-200/50 pr-8">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Destination</p>
              <p className="text-lg font-bold text-slate-800">Hunza Valley, Pakistan</p>
            </div>
            <div className="flex-1 border-r border-slate-200/50 pr-8">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Pricing From</p>
              <p className="text-lg font-bold text-emerald-600">PKR 35,500/pp</p>
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Best Time</p>
              <p className="text-lg font-bold text-slate-800">May - October</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
