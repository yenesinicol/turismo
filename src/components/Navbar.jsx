import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  UtensilsCrossed, 
  MapPin, 
  Building2, 
  Sparkles, 
  Image as ImageIcon, 
  Mail, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Compass },
    { id: 'turismo', label: 'Lugares Turísticos', icon: MapPin },
    { id: 'gastronomia', label: 'Gastronomía', icon: UtensilsCrossed },
    { id: 'restaurantes', label: 'Restaurantes', icon: Building2 },
    { id: 'cultura', label: 'Cultura & Fiestas', icon: Sparkles },
    { id: 'galeria', label: 'Galería', icon: ImageIcon },
    { id: 'contacto', label: 'Contacto', icon: Mail },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-stone-900/90 backdrop-blur-md shadow-lg shadow-black/20 py-3 border-b border-amber-900/20' 
        : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <button 
            onClick={() => handleNavClick('inicio')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-emerald-950/50 group-hover:scale-105 transition-transform">
              <span className="font-black text-xl tracking-tighter">CB</span>
            </div>
            <div>
              <span className="block font-serif font-black text-xl tracking-wide text-white group-hover:text-amber-400 transition-colors">
                COCHABAMBA
              </span>
              <span className="block text-[11px] font-medium tracking-widest uppercase text-amber-300/80">
                Corazón de Bolivia
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                      : 'text-stone-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-80" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action button CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('gastronomia')}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full shadow-lg shadow-orange-950/40 hover:shadow-orange-700/50 hover:scale-105 transition-all flex items-center space-x-1.5"
            >
              <span>Explorar Sabores</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900/95 backdrop-blur-xl border-b border-stone-800 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-left transition-colors ${
                    isActive
                      ? 'bg-amber-600 text-white'
                      : 'text-stone-200 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5 text-amber-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('contacto')}
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold text-center shadow-lg"
            >
              Planificar Mi Visita
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
