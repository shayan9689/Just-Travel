import { useState, useMemo } from 'react';
import { destinations } from '../data/travelData';
import DestinationCard from '../components/ui/DestinationCard';
import { Filter, Search, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DestinationsPage = () => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterTypes = ['All', 'Mountains', 'Coastal', 'Historical', 'Adventure'];

  const filteredDestinations = useMemo(() => {
    return destinations.filter(dest => {
      const matchSearch = dest.name.toLowerCase().includes(search.toLowerCase());
      const matchType = selectedType === 'All' || dest.locationType === selectedType;
      return matchSearch && matchType;
    });
  }, [search, selectedType]);

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Explore <span className="text-emerald-600">Pakistan</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl">Discover breathtaking landscapes, ancient civilizations, and adventure at every corner. Filter by region or type to find your next great escape.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-72 space-y-10">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Search</h4>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="City or region..."
                  className="input-field pl-12"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Location Type</h4>
              <div className="flex flex-col gap-3">
                {filterTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${selectedType === type ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                  >
                    <span>{type}</span>
                    {selectedType === type && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[32px] bg-slate-900 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-lg font-black mb-2">Need a Guide?</h4>
                <p className="text-xs text-slate-400 mb-6 font-medium">Get a personalized itinerary from our travel experts.</p>
                <button className="w-full py-3 bg-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-colors">Contact Agent</button>
              </div>
              <div className="absolute top-0 right-0 h-24 w-24 bg-emerald-500/20 blur-2xl -mr-12 -mt-12" />
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..."
                className="input-field pl-12"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="p-4 bg-slate-100 rounded-2xl text-slate-900"
            >
              <Filter size={20} />
            </button>
          </div>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Showing <span className="text-slate-900">{filteredDestinations.length}</span> results
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                <span>Sort by: Trending</span>
                <ChevronDown size={14} />
              </div>
            </div>

            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredDestinations.map((dest, index) => (
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <DestinationCard destination={dest} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <div className="mx-auto h-24 w-24 bg-slate-50 flex items-center justify-center rounded-full mb-6">
                  <Search size={32} className="text-slate-300" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">No destinations found</h3>
                <p className="text-slate-500 font-medium">Try adjusting your filters or search terms.</p>
                <button 
                  onClick={() => {setSearch(''); setSelectedType('All');}}
                  className="mt-6 text-emerald-600 font-black text-xs uppercase tracking-widest hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-black text-slate-900">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-slate-50 rounded-xl">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.15em] text-slate-400 mb-6 font-bold">Location Type</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {filterTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${selectedType === type ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-slate-500'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black text-sm uppercase tracking-widest shadow-xl"
                >
                  Show Results
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DestinationsPage;
