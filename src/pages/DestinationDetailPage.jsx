import { useParams, Link } from 'react-router-dom';
import { destinations, packages } from '../data/travelData';
import ImageGallery from '../components/ui/ImageGallery';
import PackageCard from '../components/ui/PackageCard';
import { MapPin, Star, Calendar, ArrowRight, Share2, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const DestinationDetailPage = () => {
  const { id } = useParams();
  const dest = destinations.find(d => d.id === id);

  if (!dest) return <div className="pt-24 text-center">Destination not found</div>;

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 font-bold">
          <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span className="opacity-30">/</span>
          <Link to="/destinations" className="hover:text-emerald-600 transition-colors">Destinations</Link>
          <span className="opacity-30">/</span>
          <span className="text-slate-900">{dest.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-1 space-y-12">
            <header>
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-600 uppercase tracking-widest ring-1 ring-emerald-100">
                  {dest.locationType}
                </span>
                <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 border border-slate-100">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-black text-slate-700">{dest.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">{dest.name}</h1>
              <p className="mt-6 text-xl text-slate-500 font-medium leading-relaxed">{dest.tagline}</p>
            </header>

            <ImageGallery images={[dest.image, dest.image, dest.image]} />

            <section className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900">Overview</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">{dest.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                {dest.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-1">{h}</h4>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Iconic Landmark</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Suggested Packages */}
            <section className="space-y-10 pt-12">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-slate-900">Experience <span className="text-emerald-600">{dest.name}</span></h2>
                <Link to="/packages" className="text-sm font-black text-emerald-600 hover:underline underline-offset-8">All Packages</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {packages.filter(p => p.destinationId === id).map(pkg => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Quick Facts */}
          <aside className="lg:w-96 space-y-10">
            <div className="p-10 rounded-[48px] bg-slate-900 text-white shadow-2xl space-y-8 sticky top-32">
              <div>
                <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-4">Quick Details</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Best Time to Visit</p>
                      <p className="text-sm font-black">May — October</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pricing From</p>
                      <p className="text-sm font-black">PKR {dest.price.toLocaleString()}/pp</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 space-y-4">
                 <button className="w-full py-5 bg-emerald-600 rounded-[24px] font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all active:scale-95">
                    Plan My Trip Now
                 </button>
                 <div className="flex gap-3">
                    <button className="flex-1 py-4 bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center hover:bg-white/10 transition-all">
                       <Heart size={20} className="text-white" />
                    </button>
                    <button className="flex-1 py-4 bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center hover:bg-white/10 transition-all">
                       <Share2 size={20} className="text-white" />
                    </button>
                 </div>
              </div>

              <div className="text-center">
                 <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">Verified Tourism Provider</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
