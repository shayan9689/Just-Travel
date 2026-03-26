import { useState, useMemo } from 'react';
import { packages } from '../data/travelData';
import PackageCard from '../components/ui/PackageCard';
import { Search, ChevronDown, SlidersHorizontal, Tag, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PackagesPage = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const tags = ['All', 'Most Popular', 'Luxury', 'Budget', 'Group'];

  const filteredPackages = useMemo(() => {
    return packages.filter(pkg => {
      const matchSearch = pkg.title.toLowerCase().includes(search.toLowerCase());
      const matchTag = selectedTag === 'All' || pkg.tag === selectedTag;
      return matchSearch && matchTag;
    });
  }, [search, selectedTag]);

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Our curated selections</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Premium <span className="text-emerald-600">Packages</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl">From quick weekend escapes to grand expeditions. Choose a package that fits your lifestyle and budget.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-72 space-y-10">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Search Packages</h4>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Honeymoon, road trip..."
                  className="input-field pl-12"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Package Type</h4>
              <div className="flex flex-col gap-3">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${selectedTag === tag ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Tag size={16} className={selectedTag === tag ? 'text-white' : 'text-slate-400'} />
                      <span>{tag}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search packages..."
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
            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <PackageCard pkg={pkg} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center glass-card rounded-[48px]">
                <h3 className="text-xl font-black text-slate-900 mb-2">No packages matching your criteria</h3>
                <p className="text-slate-500 font-medium">Try broadening your search or clearing the filters.</p>
                <button 
                  onClick={() => {setSearch(''); setSelectedTag('All');}}
                  className="mt-6 text-emerald-600 font-black text-xs uppercase tracking-widest"
                >
                  Reset all filters
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
                <h3 className="text-2xl font-black text-slate-900">Package Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-slate-50 rounded-xl">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.15em] text-slate-400 mb-6 font-bold">Category</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {tags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${selectedTag === tag ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-50 text-slate-500'}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black text-sm uppercase tracking-widest"
                >
                  View Packages
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PackagesPage;
