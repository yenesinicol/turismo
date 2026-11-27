import React, { useState } from 'react';

export default function Gallery({ items, onOpenLightbox }) {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Lugares', 'Gastronomía', 'Cultura'];

  const filteredItems = filter === 'Todos'
    ? items
    : items.filter((item) => item.category === filter);

  return (
    <section id="galeria" className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary dark:text-primary-fixed mb-2 block font-bold">
            Postales Inolvidables
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-5xl font-semibold text-primary dark:text-white">
            Galería Visual
          </h2>
        </div>
        <p className="font-body-sm text-on-surface-variant dark:text-stone-400 text-sm max-w-md mt-4 md:mt-0">
          Haz clic en cualquier imagen para abrirla a pantalla completa con navegación interactiva.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full font-label-md text-xs font-semibold transition-all ${
              filter === cat
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container dark:bg-stone-800 text-on-surface-variant dark:text-stone-300 hover:bg-surface-container-high'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => onOpenLightbox(item, index)}
            className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer bg-surface-container-high shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = item.fallbackImage || 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1000&q=80';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white text-xs font-semibold drop-shadow">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
