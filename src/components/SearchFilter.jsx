import React from 'react';
import { Search } from 'lucide-react';

export default function SearchFilter({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  totalResults
}) {
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'turismo', label: 'Lugares Turísticos' },
    { id: 'gastronomia', label: 'Gastronomía' },
    { id: 'restaurantes', label: 'Restaurantes' },
    { id: 'cultura', label: 'Cultura' },
  ];

  return (
    <div className="bg-surface-container-lowest dark:bg-stone-900 rounded-3xl p-4 sm:p-6 border border-outline-variant/40 dark:border-stone-800 shadow-xl -mt-6 relative z-20">
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por lugar, plato, ingrediente o zona..."
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-surface-container-low dark:bg-stone-800/80 border border-transparent focus:border-primary dark:focus:border-primary-fixed text-sm text-on-surface dark:text-stone-100 placeholder-outline focus:outline-none transition-all"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-start md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-label-md text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container dark:bg-stone-800 text-on-surface-variant dark:text-stone-300 hover:bg-surface-container-high'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {searchQuery && (
        <div className="mt-3 pt-3 border-t border-outline-variant/20 text-xs text-on-surface-variant dark:text-stone-400">
          Resultados encontrados para "<span className="font-semibold text-primary dark:text-primary-fixed">{searchQuery}</span>": {totalResults}
        </div>
      )}
    </div>
  );
}
