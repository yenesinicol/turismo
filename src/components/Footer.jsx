import React from 'react';

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center">
            CB
          </div>
          <div>
            <span className="font-serif font-bold text-white text-sm block">COCHABAMBA</span>
            <span className="text-[10px] text-stone-500">Corazón Gastronómico & Turístico de Bolivia</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-stone-400">
          <button onClick={() => scrollToSection('inicio')} className="hover:text-white transition-colors">Inicio</button>
          <button onClick={() => scrollToSection('turismo')} className="hover:text-white transition-colors">Turismo</button>
          <button onClick={() => scrollToSection('gastronomia')} className="hover:text-white transition-colors">Gastronomía</button>
          <button onClick={() => scrollToSection('restaurantes')} className="hover:text-white transition-colors">Restaurantes</button>
          <button onClick={() => scrollToSection('cultura')} className="hover:text-white transition-colors">Cultura</button>
          <button onClick={() => scrollToSection('galeria')} className="hover:text-white transition-colors">Galería</button>
          <button onClick={() => scrollToSection('contacto')} className="hover:text-white transition-colors">Contacto</button>
        </div>

        <div className="text-stone-500 text-center md:text-right">
          © 2026 Cochabamba Turismo & Gastronomía. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
