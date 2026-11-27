import React, { useState } from 'react';
import { Image as ImageIcon, Maximize2, MapPin, Tag } from 'lucide-react';

export default function Gallery({ items, onOpenLightbox }) {
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Paisajes', 'Gastronomía', 'Cultura', 'Arquitectura'];

  const filteredItems = filter === 'Todos' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <section id="galeria" className="py-24 bg-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Postales Inolvidables</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Galería <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">Visual</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Un recorrido fotográfico por los paisajes vallunos, la alta montaña, los platos más apetecibles y las festividades cochabambinas.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/50'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, index)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-stone-800/80 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Category pill */}
              <span className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                {item.category}
              </span>

              {/* Zoom icon button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-amber-400" />
              </div>

              {/* Bottom text info */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="font-serif font-bold text-lg text-white mb-1 drop-shadow-md">
                  {item.title}
                </h3>
                <div className="flex items-center text-xs text-stone-300 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 mr-1 shrink-0" />
                  <span>{item.location}</span>
                </div>
                <p className="text-stone-400 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
