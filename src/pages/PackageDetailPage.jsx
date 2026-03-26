import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { packages } from '../data/travelData';
import { ChevronDown, ChevronRight, CheckCircle2, XCircle, Clock, MapPin, Users, Heart, Share2, Info, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PackageDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages.find(p => p.id === id);
  const [openDay, setOpenDay] = useState(1);

  if (!pkg) return <div className="pt-24 text-center">Package not found</div>;

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Details */}
          <div className="flex-1">
            <header className="mb-12">
               <div className="mb-6 flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-emerald-600 border border-emerald-100 w-fit">
                  <span className="text-[10px] font-black uppercase tracking-widest">{pkg.tag}</span>
               </div>
               <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                  {pkg.title}
               </h1>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-[40px] bg-slate-50 border border-slate-100">
                  <div className="flex flex-col gap-1">
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Duration</p>
                     <p className="text-sm font-black text-slate-900">{pkg.duration} Days</p>
                  </div>
                  <div className="flex flex-col gap-1">
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Min Group</p>
                     <p className="text-sm font-black text-slate-900">02 Persons</p>
                  </div>
                  <div className="flex flex-col gap-1">
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Transport</p>
                     <p className="text-sm font-black text-slate-900">Private 4x4</p>
                  </div>
                  <div className="flex flex-col gap-1">
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Stays</p>
                     <p className="text-sm font-black text-slate-900">Luxury Hotels</p>
                  </div>
               </div>
            </header>

            {/* Itinerary */}
            <section className="mb-20">
               <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4">
                  <span>Itinerary</span>
                  <span className="h-1 flex-grow bg-slate-50 rounded-full" />
               </h3>
               
               <div className="space-y-6">
                  {pkg.itinerary.map((item) => (
                     <div key={item.day} className="group">
                        <button 
                           onClick={() => setOpenDay(openDay === item.day ? null : item.day)}
                           className={`w-full flex items-center gap-6 p-10 rounded-[40px] transition-all text-left ${openDay === item.day ? 'bg-slate-900 text-white shadow-2xl' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'}`}
                        >
                           <div className={`h-16 w-16 min-w-[64px] rounded-[24px] flex items-center justify-center font-black text-2xl transition-all ${openDay === item.day ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-600'}`}>
                              {item.day}
                           </div>
                           <div className="flex-grow">
                              <h4 className="text-xl font-black">{item.title}</h4>
                              {openDay !== item.day && <p className="text-sm opacity-60 mt-1 font-medium truncate max-w-md">{item.description}</p>}
                           </div>
                           <ChevronDown className={`transition-transform duration-300 ${openDay === item.day ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                           {openDay === item.day && (
                              <motion.div
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: 'auto', opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 className="overflow-hidden"
                              >
                                 <div className="p-10 pt-4 text-slate-400">
                                    <p className="text-lg leading-relaxed font-medium">
                                       {item.description}
                                    </p>
                                    <div className="mt-8 flex gap-8">
                                       <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                                          <MapPin size={14} className="text-emerald-500" />
                                          <span>Featured Stop</span>
                                       </div>
                                       <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                                          <Users size={14} className="text-amber-500" />
                                          <span>Local Entry</span>
                                       </div>
                                    </div>
                                 </div>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </div>
                  ))}
               </div>
            </section>

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="p-10 rounded-[40px] bg-emerald-50/50 border border-emerald-100">
                  <h4 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
                     <CheckCircle2 className="text-emerald-600" />
                     <span>What's Included</span>
                  </h4>
                  <ul className="space-y-4">
                     {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                           <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                           {inc}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="p-10 rounded-[40px] bg-red-50/30 border border-red-50">
                  <h4 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
                     <XCircle className="text-red-400" />
                     <span>Not Included</span>
                  </h4>
                  <ul className="space-y-4">
                     {pkg.exclusions.map((exc, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                           <div className="h-1.5 w-1.5 rounded-full bg-red-300" />
                           {exc}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
          </div>

          {/* Right Column: Pricing & Booking */}
          <aside className="lg:w-[420px]">
             <div className="sticky top-32 space-y-8">
                <div className="p-12 rounded-[56px] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 space-y-10">
                   <div>
                      <div className="flex items-center justify-between mb-2">
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Price Per Person</p>
                         <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-black text-slate-900">{pkg.rating}</span>
                         </div>
                      </div>
                      <div className="flex items-baseline gap-2">
                         <span className="text-5xl font-black text-slate-900 tracking-tighter">PKR {pkg.price.toLocaleString()}</span>
                         <span className="text-sm font-bold text-slate-400">/ Tour</span>
                      </div>
                   </div>

                   <hr className="border-slate-50" />

                   <div className="space-y-6">
                      <div className="flex items-center justify-between text-sm font-bold">
                         <span className="text-slate-400 uppercase tracking-widest text-[9px]">Accommodation</span>
                         <span className="text-slate-900">4-Star Luxe</span>
                      </div>
                      <div className="flex items-center justify-between text-sm font-bold">
                         <span className="text-slate-400 uppercase tracking-widest text-[9px]">Vehicle Type</span>
                         <span className="text-slate-900">Grand Cabin / Prado</span>
                      </div>
                      <div className="flex items-center justify-between text-sm font-bold">
                         <span className="text-slate-400 uppercase tracking-widest text-[9px]">Guide Language</span>
                         <span className="text-slate-900">English / Urdu</span>
                      </div>
                   </div>

                   <div className="space-y-4 pt-4">
                      <button 
                        onClick={() => navigate('/booking', { state: { pkg } })}
                        className="w-full py-6 bg-emerald-600 rounded-[28px] font-black text-sm uppercase tracking-widest text-white shadow-xl shadow-emerald-500/20 hover:bg-emerald-700 hover:scale-[1.02] transition-all active:scale-95 leading-none"
                      >
                         Initialize Booking
                      </button>
                      <button className="w-full py-6 border border-slate-100 rounded-[28px] font-black text-sm uppercase tracking-widest text-slate-900 hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-3">
                         <Info size={18} className="text-slate-400" />
                         <span>View Details In PDF</span>
                      </button>
                   </div>
                </div>

                <div className="p-8 rounded-[40px] bg-slate-50 flex items-center justify-between px-10">
                   <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-200">
                         <img src="https://ui-avatars.com/api/?name=Travel+Expert&background=random" alt="Expert" />
                      </div>
                      <div>
                         <p className="text-xs font-black text-slate-900">M. Ali Khan</p>
                         <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Travel Expert</p>
                      </div>
                   </div>
                   <button className="p-4 bg-white rounded-2xl text-slate-900 shadow-sm hover:shadow-md transition-all">
                      <Mail size={20} />
                   </button>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;
