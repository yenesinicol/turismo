import React from 'react';
import { MapPin, Info, ArrowRight, Eye, Calendar, Mountain } from 'lucide-react';

export default function TouristPlaces({ places, onSelectPlace }) {
  return (
    <section id="turismo" className="py-24 bg-stone-950 text-white relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Mountain className="w-3.5 h-3.5" />
            <span>Destinos Imperdibles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Lugares <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Turísticos</span> de Cochabamba
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Descubre paisajes imponentes, monumentos emblemáticos, fortalezas arqueológicas y la historia viva de los valles interandinos.
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place) => (
            <div
              key={place.id}
              className="group bg-stone-900/80 rounded-3xl overflow-hidden border border-stone-800/80 hover:border-amber-600/50 shadow-xl hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Image container with badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-500/30 shadow-md">
                    {place.category}
                  </span>

                  {/* Location badge */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center text-xs text-stone-200">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1.5 shrink-0" />
                    <span className="truncate font-medium">{place.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed line-clamp-3">
                    {place.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectPlace(place)}
                  className="w-full py-3 px-4 rounded-2xl bg-stone-800/90 hover:bg-gradient-to-r hover:from-emerald-700 hover:to-amber-700 text-stone-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2 border border-stone-700/60 group-hover:border-transparent shadow-md"
                >
                  <Eye className="w-4 h-4 text-amber-400 group-hover:text-white transition-colors" />
                  <span>Conocer más</span>
                  <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
