import React from 'react';
import { Compass, UtensilsCrossed, Sparkles } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
      
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=2000&q=85" 
          alt="Cristo de la Concordia y Valle de Cochabamba"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80';
          }}
          className="w-full h-full object-cover object-center animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-stone-900/50 dark:from-[#101612] dark:via-[#101612]/85 dark:to-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Prestige Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest/80 dark:bg-stone-900/80 backdrop-blur-md border border-outline-variant/40 dark:border-stone-700/80 text-on-surface dark:text-stone-200 font-label-sm text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-fixed animate-pulse" />
          <span>Capital Gastronómica & Ciudad Jardín de Bolivia 🇧🇴</span>
        </div>

        {/* Main Title (Requested Exact Title) */}
        <h1 className="font-display-hero text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface dark:text-white leading-[1.1] mb-6 text-balance">
          Descubre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary-fixed-dim dark:from-primary-fixed dark:via-secondary-container dark:to-tertiary-fixed">Cochabamba</span>, el corazón gastronómico de Bolivia
        </h1>

        {/* Subtitle */}
        <p className="font-body-lg text-base sm:text-xl text-on-surface-variant dark:text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto text-balance">
          Tierra de primavera eterna, valles templados, cumbres andinas de más de 5,000 metros y una tradición culinaria que celebra el buen comer.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => scrollToSection('turismo')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5" />
            <span>Explorar Turismo</span>
          </button>

          <button
            onClick={() => scrollToSection('gastronomia')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span>Descubrir Gastronomía</span>
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div className="p-3.5 rounded-3xl bg-surface-container/60 dark:bg-stone-900/60 backdrop-blur-md border border-outline-variant/30 text-center">
            <span className="block font-headline-sm text-xl font-bold text-primary dark:text-primary-fixed">2,560 m</span>
            <span className="font-label-sm text-[11px] text-on-surface-variant dark:text-stone-400 uppercase font-bold">Altitud Valle</span>
          </div>
          <div className="p-3.5 rounded-3xl bg-surface-container/60 dark:bg-stone-900/60 backdrop-blur-md border border-outline-variant/30 text-center">
            <span className="block font-headline-sm text-xl font-bold text-secondary dark:text-secondary-fixed">22°C</span>
            <span className="font-label-sm text-[11px] text-on-surface-variant dark:text-stone-400 uppercase font-bold">Clima Templado</span>
          </div>
          <div className="p-3.5 rounded-3xl bg-surface-container/60 dark:bg-stone-900/60 backdrop-blur-md border border-outline-variant/30 text-center">
            <span className="block font-headline-sm text-xl font-bold text-tertiary-fixed-dim dark:text-tertiary-fixed">40.44 m</span>
            <span className="font-label-sm text-[11px] text-on-surface-variant dark:text-stone-400 uppercase font-bold">Cristo Concordia</span>
          </div>
          <div className="p-3.5 rounded-3xl bg-surface-container/60 dark:bg-stone-900/60 backdrop-blur-md border border-outline-variant/30 text-center">
            <span className="block font-headline-sm text-xl font-bold text-primary dark:text-primary-fixed">UNESCO</span>
            <span className="font-label-sm text-[11px] text-on-surface-variant dark:text-stone-400 uppercase font-bold">Ciudad Creativa</span>
          </div>
        </div>

      </div>
    </section>
  );
}
