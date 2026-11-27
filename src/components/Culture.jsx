import React from 'react';
import { Sparkles, Calendar, MapPin, Feather, Heart } from 'lucide-react';

export default function Culture({ traditions }) {
  return (
    <section id="cultura" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Identidad & Costumbres</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Cultura y <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-orange-400">Tradiciones</span> Cochabambinas
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            La hospitalidad del valle se refleja en su devoción mariana, sus alegres carnavales, los rituales del batán y la milenaria chicha servida en tutuma.
          </p>
        </div>

        {/* Culture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {traditions.map((item) => (
            <div
              key={item.id}
              className="bg-stone-950/80 rounded-3xl overflow-hidden border border-stone-800 hover:border-emerald-500/50 shadow-xl transition-all duration-300 flex flex-col sm:flex-row group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/30 sm:bg-transparent" />
                <span className="absolute top-3 left-3 bg-stone-950/90 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-full border border-amber-500/30">
                  {item.tag}
                </span>
              </div>

              {/* Text info */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400 mb-3">
                    <span className="flex items-center text-amber-300">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {item.date}
                    </span>
                    <span className="flex items-center text-emerald-400">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {item.place}
                    </span>
                  </div>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-800 text-xs text-stone-400 italic">
                  💡 {item.details}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Culture quote banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 border border-emerald-600/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <Feather className="w-10 h-10 text-amber-400 mx-auto mb-4 opacity-90" />
          <blockquote className="font-serif italic text-xl sm:text-2xl text-stone-200 max-w-2xl mx-auto mb-4">
            "En Cochabamba no se come para vivir; se vive para compartir el banquete de la vida, la música del charango y la fraternidad del valle."
          </blockquote>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
            Dicho Popular Cochabambino
          </span>
        </div>

      </div>
    </section>
  );
}
