import React from 'react';
import { UtensilsCrossed, Flame, Sparkles, BookOpen, Clock, Heart } from 'lucide-react';

export default function Gastronomy({ dishes, onSelectDish }) {
  return (
    <section id="gastronomia" className="py-24 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white relative">
      
      {/* Visual background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>Sabor y Tradición Valluna</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Gastronomía <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Tradicional</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Cochabamba es reconocida nacional e internacionalmente como la capital del buen comer. Platos abundantes preparados con pasión, ingredientes de valle y recetas ancestrales.
          </p>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-stone-900/90 rounded-3xl overflow-hidden border border-stone-800 hover:border-orange-500/50 shadow-xl hover:shadow-2xl hover:shadow-orange-950/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-orange-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Plato Emblemático
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs text-amber-300 font-medium italic block">
                      "{dish.tagline}"
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {dish.name}
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed mb-4">
                    {dish.description}
                  </p>

                  {/* Origin & Tradition snippet */}
                  <div className="bg-stone-950/70 border border-stone-800/80 rounded-2xl p-3.5 mb-2">
                    <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-400 mb-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Origen & Tradición:</span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed line-clamp-3">
                      {dish.tradition}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-1">
                <button
                  onClick={() => onSelectDish(dish)}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-700/80 to-orange-700/80 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-orange-900/50"
                >
                  <UtensilsCrossed className="w-4 h-4 text-amber-200" />
                  <span>Ver Receta & Tradición Completa</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
