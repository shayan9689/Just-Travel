import { motion } from 'framer-motion';
import { Package, Heart, Settings, LogOut, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { packages } from '../data/travelData';

const UserDashboard = () => {
  const stats = [
    { label: 'Upcoming Trips', value: '02', icon: Package, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Saved Destinations', value: '12', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
    { label: 'Reviews', value: '08', icon: ChevronRight, color: 'text-amber-500', bg: 'bg-amber-50' },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-72 space-y-4">
             <div className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                <div className="text-center mb-8">
                   <div className="h-24 w-24 rounded-full bg-slate-100 mx-auto mb-4 border-2 border-white shadow-md overflow-hidden">
                      <img src="https://ui-avatars.com/api/?name=Shayan+Ali&background=random" alt="User" />
                   </div>
                   <h3 className="text-xl font-black text-slate-900">Shayan Ali</h3>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Free Member</p>
                </div>
                
                <nav className="space-y-2">
                   {[
                      { name: 'My Bookings', icon: Package, active: true },
                      { name: 'Saved Items', icon: Heart },
                      { name: 'Settings', icon: Settings },
                      { name: 'Logout', icon: LogOut, danger: true },
                   ].map((item) => (
                      <button 
                        key={item.name}
                        className={`w-full flex items-center justify-between px-6 py-4 rounded-[20px] text-xs font-black uppercase tracking-widest transition-all ${item.active ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-500 hover:bg-slate-50'} ${item.danger ? 'text-red-500 hover:bg-red-50' : ''}`}
                      >
                         <div className="flex items-center gap-3">
                            <item.icon size={16} />
                            <span>{item.name}</span>
                         </div>
                      </button>
                   ))}
                </nav>
             </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-12">
             {/* Stats Header */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                   <div key={i} className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center gap-6 group hover:scale-105 transition-all cursor-pointer">
                      <div className={`h-14 w-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center transition-all group-hover:rotate-12`}>
                         <stat.icon size={28} />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                         <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                      </div>
                   </div>
                ))}
             </div>

             {/* Recent Bookings */}
             <section className="space-y-8">
                <div className="flex items-center justify-between px-4">
                   <h3 className="text-2xl font-black text-slate-900">My <span className="text-emerald-600">Bookings</span></h3>
                   <button className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-emerald-600 transition-colors">View All History</button>
                </div>

                <div className="space-y-4">
                   {packages.slice(0, 1).map((pkg) => (
                      <div key={pkg.id} className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-8 group">
                         <div className="h-32 w-full md:w-48 rounded-3xl overflow-hidden shadow-md">
                            <img src={pkg.image} alt="" className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700" />
                         </div>
                         <div className="flex-grow text-center md:text-left">
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                               <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full ring-1 ring-emerald-100">Confirmed</span>
                               <span className="text-xs font-bold text-slate-300">#PE-10293</span>
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4">{pkg.title}</h4>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-bold text-slate-400">
                               <div className="flex items-center gap-1.5"><Calendar size={16} className="text-emerald-500" /> <span>Oct 12 — Oct 18, 2024</span></div>
                               <div className="flex items-center gap-1.5"><MapPin size={16} className="text-amber-500" /> <span>Hunza Valley</span></div>
                            </div>
                         </div>
                         <div className="shrink-0 w-full md:w-auto">
                            <button className="w-full md:w-auto px-8 py-4 bg-slate-50 text-slate-900 rounded-[20px] font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                               View Ticket
                            </button>
                         </div>
                      </div>
                   ))}
                </div>
             </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
