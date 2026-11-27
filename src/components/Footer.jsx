import React from 'react';
import { Compass, Heart, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ scrollToSection }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-amber-700 flex items-center justify-center text-white font-black text-lg">
                CB
              </div>
              <span className="font-serif font-black text-xl text-white tracking-wider">
                COCHABAMBA
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-4">
              Portal turístico y gastronómico oficial independiente dedicado a difundir los tesoros, sabores, paisajes y tradiciones del valle de Cochabamba, Bolivia.
            </p>
            <div className="text-xs text-amber-400/90 font-medium">
              🇧🇴 "Cochabamba, corazón de Bolivia"
            </div>
          </div>

          {/* Quick links Turismo */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-b border-amber-600/30 pb-2">
              Lugares Turísticos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><button onClick={() => scrollToSection('turismo')} className="hover:text-amber-400 transition-colors">Cristo de la Concordia</button></li>
              <li><button onClick={() => scrollToSection('turismo')} className="hover:text-amber-400 transition-colors">Palacio Portales</button></li>
              <li><button onClick={() => scrollToSection('turismo')} className="hover:text-amber-400 transition-colors">Parque Nacional Tunari</button></li>
              <li><button onClick={() => scrollToSection('turismo')} className="hover:text-amber-400 transition-colors">Laguna Angostura</button></li>
              <li><button onClick={() => scrollToSection('turismo')} className="hover:text-amber-400 transition-colors">Ruinas de Incallajta</button></li>
              <li><button onClick={() => scrollToSection('turismo')} className="hover:text-amber-400 transition-colors">Mercado La Cancha</button></li>
            </ul>
          </div>

          {/* Quick links Gastronomia */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-b border-amber-600/30 pb-2">
              Platos Típicos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><button onClick={() => scrollToSection('gastronomia')} className="hover:text-amber-400 transition-colors">Pique Macho Cochabambino</button></li>
              <li><button onClick={() => scrollToSection('gastronomia')} className="hover:text-amber-400 transition-colors">Silpancho Tradicional</button></li>
              <li><button onClick={() => scrollToSection('gastronomia')} className="hover:text-amber-400 transition-colors">Chicharrón de Sacaba</button></li>
              <li><button onClick={() => scrollToSection('gastronomia')} className="hover:text-amber-400 transition-colors">Sopa de Maní en Batán</button></li>
              <li><button onClick={() => scrollToSection('gastronomia')} className="hover:text-amber-400 transition-colors">Anticuchos al Fuego</button></li>
              <li><button onClick={() => scrollToSection('gastronomia')} className="hover:text-amber-400 transition-colors">Pampaku Andino de la Tierra</button></li>
            </ul>
          </div>

          {/* Contact and schedule */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-b border-amber-600/30 pb-2">
              Contacto Turístico
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Plaza 14 de Septiembre, Cochabamba</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+591 4 4258030</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>turismo@cochabamba.travel.bo</span>
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
              >
                <ArrowUp className="w-4 h-4 text-amber-400" />
                <span>Regresar al Inicio</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Turismo y Gastronomía de Cochabamba, Bolivia. Todos los derechos reservados.</p>
          <p className="flex items-center space-x-1">
            <span>Creado con</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline mx-0.5" />
            <span>para promover la cultura y la gastronomía cochabambina</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
