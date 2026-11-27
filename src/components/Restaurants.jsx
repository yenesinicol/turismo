import React from 'react';
import { MapPin, Phone, Star } from 'lucide-react';

export default function Restaurants({ restaurants }) {
  return (
    <section id="restaurantes" className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary dark:text-primary-fixed mb-2 block font-bold">
            Rutas Gastronómicas
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-5xl font-semibold text-primary dark:text-white">
            Restaurantes Destacados
          </h2>
        </div>
        <p className="font-body-sm text-on-surface-variant dark:text-stone-400 text-sm max-w-md mt-4 md:mt-0">
          Los templos culinarios donde degustar la auténtica sazón cochabambina con hospitalidad de primer nivel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((rest) => (
          <article 
            key={rest.id}
            className="group bg-surface-container-lowest dark:bg-stone-900 rounded-3xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
                <img 
                  src={rest.image} 
                  alt={rest.name} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = rest.fallbackImage || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
                <span className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {rest.badge || 'Recomendado'}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-tertiary-fixed font-label-sm text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-tertiary-fixed text-tertiary-fixed" />
                  <span>{rest.rating ? rest.rating.split(' ')[0] : '4.9'}</span>
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-headline-sm text-xl font-bold text-primary dark:text-white mb-1 group-hover:text-secondary transition-colors">
                  {rest.name}
                </h3>
                <p className="text-xs font-semibold text-secondary dark:text-secondary-fixed mb-3">
                  {rest.specialty}
                </p>
                <p className="text-sm text-on-surface-variant dark:text-stone-300 leading-relaxed mb-4">
                  {rest.description}
                </p>

                <div className="space-y-1.5 text-xs text-on-surface-variant dark:text-stone-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary dark:text-primary-fixed shrink-0" />
                    <span className="truncate">{rest.location}</span>
                  </div>
                  {rest.contact && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-primary dark:text-primary-fixed shrink-0" />
                      <span>{rest.contact}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
