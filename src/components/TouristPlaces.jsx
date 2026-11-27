import React from 'react';
import { 
  MapPin, 
  ArrowRight, 
  Heart, 
  Sparkles, 
  Clock, 
  Mountain, 
  Compass, 
  Activity, 
  Shirt, 
  Calendar 
} from 'lucide-react';

export default function TouristPlaces({ places, onSelectPlace, favorites = [], onToggleFavorite }) {
  return (
    <section id="turismo" className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Section Header (Stitch Node 09d0abdea90942908bb983ef73a40909) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-secondary" />
            <span className="font-label-sm text-xs text-secondary tracking-widest uppercase font-bold">
              Guía de Destinos
            </span>
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-5xl font-semibold text-primary dark:text-white">
            Destinos Inolvidables
          </h2>
        </div>
        <p className="font-body-sm text-on-surface-variant dark:text-stone-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
          Maravillas geográficas, palacios neoclásicos y fortalezas arqueológicas de los valles interandinos y la cordillera.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place) => {
          const isFav = favorites.some((f) => f.id === place.id);
          return (
            <article 
              key={place.id}
              className="flex flex-col bg-surface-container-lowest dark:bg-stone-900 rounded-3xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(31,41,35,0.06),0_2px_6px_-1px_rgba(184,90,50,0.04)] border border-outline-variant/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Media with Stitch overlays */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container-high group">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = place.fallbackImage || 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80';
                  }}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-label-sm text-xs bg-primary text-on-primary shadow-sm backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-tertiary-fixed fill-tertiary-fixed" />
                    <span>{place.category.split('&')[0]}</span>
                  </span>
                </div>

                {/* Wishlist Heart Button */}
                <button 
                  onClick={() => onToggleFavorite && onToggleFavorite(place)}
                  className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md flex items-center justify-center transition-colors shadow-sm ${
                    isFav ? 'text-secondary' : 'text-stone-400 hover:text-secondary'
                  }`}
                  title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-secondary' : ''}`} />
                </button>

                {/* Bottom Badges: Altitude & Duration */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary text-xs font-semibold">
                  <span className="flex items-center gap-1.5 bg-black/45 px-2.5 py-1 rounded-xl backdrop-blur-sm">
                    <Mountain className="w-3.5 h-3.5 text-tertiary-fixed" />
                    <span>{place.altitude || '2,570 msnm'}</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/45 px-2.5 py-1 rounded-xl backdrop-blur-sm">
                    <Clock className="w-3.5 h-3.5 text-secondary-container" />
                    <span>{place.duration || '2 a 3 hrs'}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-3 justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1 text-secondary font-label-md text-xs font-semibold">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="truncate">{place.location}</span>
                  </div>

                  <h3 className="font-headline-sm text-xl font-bold text-primary dark:text-white mt-1">
                    {place.name}
                  </h3>

                  <p className="font-body-sm text-sm text-on-surface-variant dark:text-stone-300 line-clamp-3 mt-2 leading-relaxed">
                    {place.shortDescription}
                  </p>

                  {/* Highlights Tags */}
                  {place.highlights && (
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {place.highlights.slice(0, 3).map((hl, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-0.5 rounded-lg bg-surface-container dark:bg-stone-800 text-on-surface-variant dark:text-stone-300 font-label-sm text-[11px]"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-outline-variant/30">
                  <button 
                    onClick={() => onSelectPlace(place)}
                    className="w-full py-2.5 px-4 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Manual del Explorador: Tips para tu Viaje en Bolivia (Exact Stitch Turismo Section 2) */}
      <div className="mt-20 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="font-label-sm text-xs text-secondary tracking-widest uppercase font-bold">
              Manual del Explorador
            </span>
          </div>
          <h3 className="font-headline-md text-2xl sm:text-3xl text-primary dark:text-white font-semibold">
            Tips para tu Viaje en Bolivia
          </h3>
          <p className="font-body-sm text-on-surface-variant dark:text-stone-400 text-sm">
            Recomendaciones indispensables para disfrutar cada piso ecológico al máximo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tip 1 */}
          <div className="bg-surface-container dark:bg-stone-900 rounded-3xl p-6 flex gap-4 items-start shadow-sm border border-outline-variant/30">
            <div className="w-12 h-12 rounded-2xl bg-surface-container-lowest dark:bg-stone-800 text-primary dark:text-primary-fixed flex items-center justify-center shrink-0 shadow-sm">
              <Activity className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <h4 className="font-headline-sm text-[1.05rem] text-primary dark:text-white font-semibold">
                Aclimatación y Soroche
              </h4>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant dark:text-stone-300 leading-relaxed">
                Inicia tu itinerario en <strong className="text-primary dark:text-primary-fixed font-semibold">Cochabamba (2,570 msnm)</strong> para una adaptación suave antes de subir al Altiplano o cumbres nevadas. Bebe mate de coca e hidrátate.
              </p>
            </div>
          </div>

          {/* Tip 2 */}
          <div className="bg-surface-container dark:bg-stone-900 rounded-3xl p-6 flex gap-4 items-start shadow-sm border border-outline-variant/30">
            <div className="w-12 h-12 rounded-2xl bg-surface-container-lowest dark:bg-stone-800 text-secondary dark:text-secondary-fixed flex items-center justify-center shrink-0 shadow-sm">
              <Shirt className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <h4 className="font-headline-sm text-[1.05rem] text-primary dark:text-white font-semibold">
                Valles vs. Altiplano
              </h4>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant dark:text-stone-300 leading-relaxed">
                Cochabamba goza de primavera perenne (ropa ligera de día y abrigo suave nocturno). Para el Tunari, empaca cortavientos, gafas UV y calzado con tracción de montaña.
              </p>
            </div>
          </div>

          {/* Tip 3 */}
          <div className="bg-surface-container dark:bg-stone-900 rounded-3xl p-6 flex gap-4 items-start shadow-sm border border-outline-variant/30">
            <div className="w-12 h-12 rounded-2xl bg-surface-container-lowest dark:bg-stone-800 text-tertiary-fixed-dim dark:text-tertiary-fixed flex items-center justify-center shrink-0 shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <h4 className="font-headline-sm text-[1.05rem] text-primary dark:text-white font-semibold">
                Mejor Época de Viaje
              </h4>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant dark:text-stone-300 leading-relaxed">
                <strong className="text-primary dark:text-primary-fixed font-semibold">Mayo a Octubre:</strong> temporada seca ideal para trekking andino. El valle de Cochabamba ofrece clima templado y festividades durante todo el año.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
