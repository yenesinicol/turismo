import React from 'react';
import { Compass, UtensilsCrossed, MapPin, Sparkles, Award, ArrowDown } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950 text-white pt-20">
      
      {/* Background Hero Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=2000&q=85" 
          alt="Panorámica de Cochabamba y el Cristo de la Concordia"
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom"
        />
        {/* Multilayer gradient: greens, deep brown, and warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/50 to-transparent" />
        {/* Cultural texture accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center sm:text-left">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 backdrop-blur-md mb-6 shadow-lg shadow-emerald-950/50">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Capital Gastronómica & Ciudad Jardín de Bolivia
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-tight mb-6">
            Descubre <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Cochabamba</span>, el corazón gastronómico de Bolivia
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-stone-300 font-normal leading-relaxed mb-10 max-w-2xl drop-shadow-md">
            Sumérgete en valles templados donde la majestuosidad andina se une a una tradición culinaria inigualable. Explora monumentos icónicos, saborea platos legendarios y vive la calidez de su gente.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-start">
            <button
              onClick={() => scrollToSection('turismo')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-base shadow-xl shadow-emerald-950/60 hover:shadow-emerald-700/40 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2.5 border border-emerald-500/30"
            >
              <Compass className="w-5 h-5 text-amber-300" />
              <span>Explorar Turismo</span>
            </button>

            <button
              onClick={() => scrollToSection('gastronomia')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-base shadow-xl shadow-orange-950/60 hover:shadow-orange-600/40 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2.5 border border-amber-400/30"
            >
              <UtensilsCrossed className="w-5 h-5 text-amber-200" />
              <span>Descubrir Gastronomía</span>
            </button>
          </div>

          {/* Fast Highlights bar */}
          <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">40.44m</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-medium mt-1">Cristo de la Concordia</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">2,570m</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-medium mt-1">Altitud de Valle Primaveral</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-orange-400">+100</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-medium mt-1">Platos y Tradiciones</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-amber-200">18°C</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-medium mt-1">Clima Templado Todo el Año</div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle bounce indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
           onClick={() => scrollToSection('turismo')}>
        <span className="text-[11px] uppercase tracking-widest text-stone-400 mb-1">Desliza para explorar</span>
        <ArrowDown className="w-4 h-4 text-amber-400 animate-bounce" />
      </div>

    </section>
  );
}
