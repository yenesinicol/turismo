import React from 'react';
import { Search, Filter, X, Sparkles } from 'lucide-react';

export default function SearchFilter({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory,
  totalResults
}) {
  const categories = [
    { id: 'todos', label: 'Todos los Atractivos' },
    { id: 'turismo', label: 'Lugares Turísticos' },
    { id: 'gastronomia', label: 'Platos Típicos' },
    { id: 'restaurantes', label: 'Restaurantes' }
  ];

  return (
    <div className="bg-stone-900/60 backdrop-blur-xl border border-stone-800 rounded-3xl p-4 sm:p-6 shadow-2xl max-w-4xl mx-auto -mt-10 relative z-20">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        
        {/* Search input */}
        <div className="relative w-full md:flex-1">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-amber-500/80 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar lugares, platos típicos (ej: Cristo, Pique Macho, Portales)..."
            className="w-full bg-stone-950/80 border border-stone-700/80 rounded-2xl pl-12 pr-10 py-3.5 text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white p-1 rounded-full hover:bg-stone-800"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/40'
                  : 'bg-stone-800/90 text-stone-300 hover:bg-stone-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* Results badge */}
      {searchQuery && (
        <div className="mt-3 text-xs text-amber-400/90 flex items-center justify-between px-2">
          <span>Mostrando resultados coincidentes para "{searchQuery}"</span>
          <span className="font-semibold text-stone-300">{totalResults} encontrados</span>
        </div>
      )}
    </div>
  );
}
