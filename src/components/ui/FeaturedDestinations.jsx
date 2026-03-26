import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { destinations } from '../../data/travelData';

const FeaturedDestinations = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Breathtaking <span className="text-emerald-600">Destinations</span></h2>
            <p className="mt-4 text-slate-500 font-medium">Explore the most iconic and serene locations in Pakistan, hand-picked for their natural beauty and cultural significance.</p>
          </div>
          <Link to="/destinations" className="flex items-center gap-2 text-emerald-600 font-black text-sm uppercase tracking-wider hover:gap-4 transition-all group">
            <span>Explore All</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((dest, index) => (
            <div
              key={dest.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-96 w-full overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute left-6 top-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 text-[10px] font-black uppercase text-white tracking-widest">
                  {dest.locationType}
                </div>
              </div>

              <div className="absolute bottom-0 w-full p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-black">{dest.rating}</span>
                  <span className="text-[10px] opacity-80 font-bold uppercase tracking-widest">({dest.reviews} Reviews)</span>
                </div>
                <h3 className="text-2xl font-black mb-2">{dest.name}</h3>
                <p className="text-sm font-medium mb-6 opacity-80 line-clamp-2">{dest.tagline}</p>
                <Link 
                  to={`/destination/${dest.id}`} 
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-black text-slate-900 hover:bg-emerald-600 hover:text-white transition-all transform active:scale-95"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
