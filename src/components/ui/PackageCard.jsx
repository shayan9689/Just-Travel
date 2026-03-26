import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PackageCard = ({ pkg, index = 0 }) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="flex flex-col overflow-hidden rounded-[32px] bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-200/20 transition-all duration-500 group border border-slate-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute left-6 top-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 text-[10px] font-black uppercase text-white tracking-widest">
          {pkg.tag || 'Featured'}
        </div>
      </div>

      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span className="text-xs font-black text-slate-700">{pkg.rating}</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{pkg.duration} Days</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{pkg.title}</h3>
          
          <div className="flex gap-4 text-[10px] font-bold text-slate-400 mb-6 uppercase tracking-widest">
            <div className="flex items-center gap-1.5"><Clock size={14} /> <span>{pkg.duration}D/{pkg.duration-1}N</span></div>
            <div className="flex items-center gap-1.5"><Users size={14} /> <span>Private</span></div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Starting From</p>
            <p className="text-xl font-black text-emerald-600">PKR {pkg.price.toLocaleString()}</p>
          </div>
          <Link 
            to={`/package/${pkg.id}`} 
            className="p-3 bg-slate-900 text-white rounded-xl hover:bg-emerald-600 transition-colors active:scale-90"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
