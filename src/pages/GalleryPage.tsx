import React, { useState, useMemo } from 'react';
import { Image as ImageIcon, Filter, ZoomIn, Info } from 'lucide-react';
import { GALLERY_DATA } from '../data/gallery';
import { GalleryItem, GalleryCategory } from '../types';
import { Lightbox } from '../components/common/Lightbox';
import { SEO } from '../components/common/SEO';
import { handleImageError } from '../utils/imageFallback';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const categories: string[] = [
    'All',
    'Shop',
    'Mobile Phones',
    'Accessories',
    'Repair Work',
    'Customer Service',
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_DATA;
    return GALLERY_DATA.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeItem = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <>
      <SEO
        title="Photo Gallery | Aslam Mobiles Store & Service Station"
        description="View photos of Aslam Mobiles shop, repair work station, smartphone displays, accessories, and customer service counters."
      />

      {/* Header */}
      <section className="bg-navy-950 bg-tech-circuit text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3.5 py-1 rounded-full border border-cyber-cyan/30">
              Visual Experience
            </span>
            <span className="text-xs font-semibold text-slate-300 bg-navy-800/80 px-3.5 py-1 rounded-full border border-navy-700">
              📍 ECR Road, Senthalaippattinam
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Aslam Mobiles <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-electric-400">Gallery</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            Take a look at our mobile sales inventory, repair bench, genuine accessories collection, and customer service facilities at ECR Road.
          </p>
        </div>
      </section>

      {/* Category Toolbar */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Photos' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-slate-200 border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-end"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => handleImageError(e, 'repair')}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-90 transition"></div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Text Content at bottom */}
                <div className="relative z-10 p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-electric-500 text-white mb-2 inline-block shadow-sm">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold line-clamp-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick note about replacing images */}
          <div className="mt-12 text-center text-xs text-slate-400">
            Click any photo to open full-screen lightbox view with keyboard navigation.
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && selectedIdx !== null && (
        <Lightbox
          isOpen={selectedIdx !== null}
          onClose={() => setSelectedIdx(null)}
          imageSrc={activeItem.image}
          imageAlt={activeItem.title}
          title={activeItem.title}
          category={activeItem.category}
          description={activeItem.description}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
};
