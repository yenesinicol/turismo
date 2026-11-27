import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  UtensilsCrossed, 
  Building2, 
  Sparkles, 
  Image as ImageIcon, 
  Mail, 
  Menu, 
  X, 
  Heart, 
  Sun, 
  Moon 
} from 'lucide-react';

export default function Navbar({ 
  activeSection, 
  scrollToSection, 
  darkMode, 
  setDarkMode, 
  favoritesCount = 0, 
  onOpenFavorites 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Compass },
    { id: 'turismo', label: 'Turismo', icon: Compass },
    { id: 'gastronomia', label: 'Gastronomía', icon: UtensilsCrossed },
    { id: 'restaurantes', label: 'Restaurantes', icon: Building2 },
    { id: 'cultura', label: 'Cultura', icon: Sparkles },
    { id: 'galeria', label: 'Galería', icon: ImageIcon },
    { id: 'contacto', label: 'Contacto', icon: Mail },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 px-4 sm:px-8 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-[#101612]/90 backdrop-blur-md shadow-md shadow-black/5 dark:shadow-black/20 border-b border-outline-variant/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 group focus:outline-none text-left"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary via-primary-container to-secondary flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-sm tracking-tighter">CB</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm font-bold text-lg tracking-tight text-on-surface dark:text-white group-hover:text-primary dark:group-hover:text-primary-fixed transition-colors">
              COCHABAMBA
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-secondary dark:text-secondary-fixed">
              Corazón de Bolivia
            </span>
          </div>
        </button>

        {/* Desktop Pill Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/85 dark:bg-stone-900/85 backdrop-blur-md border border-outline-variant/40 dark:border-stone-800 px-4 py-1.5 rounded-full shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive 
                    ? 'bg-primary text-on-primary shadow-sm' 
                    : 'text-on-surface-variant dark:text-stone-300 hover:text-primary dark:hover:text-white hover:bg-surface-container-high dark:hover:bg-stone-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: Favorites, Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          
          {/* Wishlist Favorites Button */}
          <button 
            onClick={onOpenFavorites}
            className="relative p-2 rounded-xl text-on-surface-variant dark:text-stone-300 hover:bg-surface-container dark:hover:bg-stone-800 transition-colors"
            title="Mis Favoritos"
            aria-label="Favoritos"
          >
            <Heart className="w-5 h-5 text-secondary fill-secondary" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center">
              {favoritesCount}
            </span>
          </button>

          {/* Theme Toggle (Sun / Moon) */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-on-surface-variant dark:text-stone-300 hover:bg-surface-container dark:hover:bg-stone-800 transition-colors"
            title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-label="Alternar tema"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-tertiary-fixed" />
            ) : (
              <Moon className="w-5 h-5 text-on-surface-variant" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-on-surface-variant dark:text-stone-300 hover:bg-surface-container dark:hover:bg-stone-800 focus:outline-none"
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border border-outline-variant/40 dark:border-stone-800 rounded-3xl p-5 shadow-xl transition-all">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm font-semibold py-2 px-3 rounded-xl transition-all ${
                  activeSection === item.id 
                    ? 'bg-primary text-on-primary' 
                    : 'text-on-surface dark:text-stone-200 hover:bg-surface-container dark:hover:bg-stone-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
