import React from 'react';
import { Building2, MapPin, Phone, Mail, Clock, Star, ExternalLink } from 'lucide-react';

export default function Restaurants({ restaurants }) {
  return (
    <section id="restaurantes" className="py-24 bg-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Guía de Restaurantes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Dónde <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Comer</span> en Cochabamba
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            De casonas coloniales con música en vivo a miradores en la cima del cerro y legendarias chicharronerías campestres.
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((res) => (
            <div
              key={res.id}
              className="bg-stone-900/85 rounded-3xl overflow-hidden border border-stone-800/90 hover:border-amber-500/50 shadow-xl hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-emerald-900/90 backdrop-blur-md text-emerald-200 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                    {res.badge}
                  </span>

                  <span className="absolute top-4 right-4 bg-stone-950/85 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full">
                    {res.rating}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                      {res.zone}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {res.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-xs font-semibold text-orange-400 uppercase tracking-wide block mb-1">
                      Especialidad:
                    </span>
                    <p className="text-sm font-medium text-stone-200">
                      {res.specialty}
                    </p>
                  </div>

                  <p className="text-stone-400 text-xs leading-relaxed mb-5">
                    {res.description}
                  </p>

                  {/* Info details */}
                  <div className="space-y-2 pt-4 border-t border-stone-800 text-xs text-stone-300">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{res.location}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{res.schedule}</span>
                    </div>

                    {res.contact && (
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                        <span className="font-semibold text-stone-200">{res.contact}</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={`tel:${res.contact.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 border border-stone-700 hover:border-transparent text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contactar o Reservar</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
