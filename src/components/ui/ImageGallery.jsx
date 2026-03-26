import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const ImageGallery = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((activeIdx + 1) % images.length);
  const prev = () => setActiveIdx((activeIdx - 1 + images.length) % images.length);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-[40px] shadow-2xl shadow-slate-200/50 group">
        <img 
          src={images[activeIdx]} 
          alt="Gallery" 
          className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
        />
        
        {/* Controls */}
        <div className="absolute inset-x-6 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={prev}
            className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xl text-white hover:bg-white hover:text-slate-900 transition-all active:scale-90 shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xl text-white hover:bg-white hover:text-slate-900 transition-all active:scale-90 shadow-xl"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-6 right-6 rounded-2xl bg-slate-900/80 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase text-white tracking-widest">
          {activeIdx + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`relative aspect-square overflow-hidden rounded-2xl transition-all duration-300 ${activeIdx === idx ? 'ring-4 ring-emerald-500 ring-offset-2 scale-95' : 'opacity-60 hover:opacity-100'}`}
          >
            <img src={img} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
