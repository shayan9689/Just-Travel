import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { packages } from '../../data/travelData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TrendingPackages = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 text-xs font-black uppercase tracking-widest mb-4 block">Hand-picked experiences</span>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">Trending <span className="text-emerald-600">Travel Packages</span></h2>
          <p className="mt-4 text-slate-500 font-medium">From budget road trips to luxury air tours, find the perfect package for your next adventure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row overflow-hidden rounded-[32px] bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-200/20 transition-all duration-500 group"
            >
              <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8 lg:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-600 uppercase tracking-widest ring-1 ring-emerald-100">
                      {pkg.tag}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-black text-slate-700">{pkg.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{pkg.title}</h3>
                  
                  <div className="flex gap-6 text-xs font-bold text-slate-400 mb-6">
                    <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> <span>{pkg.duration} Days</span></div>
                    <div className="flex items-center gap-1.5"><Users className="h-4 w-4" /> <span>Group/Private</span></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Price Per Person</p>
                    <p className="text-2xl font-black text-slate-900 text-emerald-600">PKR {pkg.price.toLocaleString()}</p>
                  </div>
                  <Link 
                    to={`/package/${pkg.id}`} 
                    className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-emerald-600 transition-colors active:scale-90"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPackages;
