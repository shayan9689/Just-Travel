import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  return (
    <div className="group relative overflow-hidden rounded-[32px] bg-white shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-200/20 transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute left-6 top-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 text-[10px] font-black uppercase text-white tracking-widest">
          {destination.locationType}
        </div>
      </div>

      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-black text-slate-700">{destination.rating}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">({destination.reviews} Reviews)</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">{destination.name}</h3>
          <p className="text-sm font-medium text-slate-500 mb-6 line-clamp-2">{destination.tagline}</p>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
          <div className="flex items-center gap-2 text-slate-400 font-bold text-xs">
            <MapPin size={16} className="text-emerald-500" />
            <span>North Pakistan</span>
          </div>
          <Link 
            to={`/destination/${destination.id}`} 
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-black text-white hover:bg-emerald-600 transition-all active:scale-90"
          >
            <span>Explore</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
