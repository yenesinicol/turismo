import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilter from './components/SearchFilter';
import TouristPlaces from './components/TouristPlaces';
import Gastronomy from './components/Gastronomy';
import Restaurants from './components/Restaurants';
import Culture from './components/Culture';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ModalDetails from './components/ModalDetails';
import Lightbox from './components/Lightbox';

import { touristPlaces } from './data/placesData';
import { gastronomyData } from './data/gastronomyData';
import { restaurantsData } from './data/restaurantsData';
import { cultureData } from './data/cultureData';
import { galleryData } from './data/galleryData';

import { ArrowUp, Heart, X, Trash2, Copy, Check } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');

  // Theme State (Dark / Light)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('cbba-theme') !== 'light';
  });

  // Favorites Wishlist State
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cbba-favorites') || '[]');
    } catch {
      return [];
    }
  });
  const [favoritesModalOpen, setFavoritesModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Modals state
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Apply theme to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('cbba-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('cbba-theme', 'light');
    }
  }, [darkMode]);

  // Toast handler
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Toggle Favorite
  const toggleFavorite = (item, type) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === item.id);
      let updated;
      if (exists) {
        updated = prev.filter((f) => f.id !== item.id);
        showToast(`Eliminado de favoritos: ${item.name}`);
      } else {
        updated = [...prev, { id: item.id, name: item.name, type, img: item.image }];
        showToast(`Añadido a tus favoritos: ${item.name}`);
      }
      localStorage.setItem('cbba-favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.setItem('cbba-favorites', JSON.stringify([]));
    showToast('Lista de favoritos vaciada');
  };

  const copyFavoritesItinerary = () => {
    if (favorites.length === 0) return;
    const text = 'Mi itinerario por Cochabamba:\n' + favorites.map((f) => `• ${f.name} (${f.type})`).join('\n');
    navigator.clipboard.writeText(text).then(() => {
      showToast('¡Itinerario copiado al portapapeles!');
    });
  };

  // Scroll to section handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section and back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['inicio', 'turismo', 'gastronomia', 'restaurantes', 'cultura', 'galeria', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered places
  const filteredPlaces = touristPlaces.filter((p) => {
    const matchesSearch = searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'todos' || activeCategory === 'turismo';
    return matchesSearch && matchesCat;
  });

  // Filtered dishes
  const filteredDishes = gastronomyData.filter((d) => {
    const matchesSearch = searchQuery === '' ||
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tradition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'todos' || activeCategory === 'gastronomia';
    return matchesSearch && matchesCat;
  });

  // Filtered restaurants
  const filteredRestaurants = restaurantsData.filter((r) => {
    const matchesSearch = searchQuery === '' ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.zone.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'todos' || activeCategory === 'restaurantes';
    return matchesSearch && matchesCat;
  });

  const totalResults = filteredPlaces.length + filteredDishes.length + filteredRestaurants.length;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-on-surface dark:bg-[#101612] dark:text-[#E2EDE5] font-sans selection:bg-primary selection:text-white transition-colors duration-300">

      {/* Navigation (Andean Vanguard Pill Bar) */}
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setFavoritesModalOpen(true)}
      />

      {/* Hero Header */}
      <Hero scrollToSection={scrollToSection} />

      {/* Interactive Search & Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          totalResults={totalResults}
        />
      </div>

      {/* Lugares Turisticos (Google Stitch node 09d0abdea90942908bb983ef73a40909) */}
      {(activeCategory === 'todos' || activeCategory === 'turismo') && (
        <TouristPlaces
          places={filteredPlaces}
          onSelectPlace={(place) => setSelectedPlace(place)}
          favorites={favorites}
          onToggleFavorite={(place) => toggleFavorite(place, 'Lugar')}
        />
      )}

      {/* Gastronomia (Google Stitch node b4677bcf3378430b86fc1f2ab211523c) */}
      {(activeCategory === 'todos' || activeCategory === 'gastronomia') && (
        <Gastronomy
          dishes={filteredDishes}
          onSelectDish={(dish) => setSelectedDish(dish)}
          favorites={favorites}
          onToggleFavorite={(dish) => toggleFavorite(dish, 'Plato')}
        />
      )}

      {/* Restaurantes Destacados */}
      {(activeCategory === 'todos' || activeCategory === 'restaurantes') && (
        <Restaurants
          restaurants={filteredRestaurants}
        />
      )}

      {/* Cultura y Tradiciones */}
      <Culture traditions={cultureData} />

      {/* Galeria Visual */}
      <Gallery
        items={galleryData}
        onOpenLightbox={(item, index) => setLightboxIndex(index)}
      />

      {/* Contacto & Consultas */}
      <Contact />

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Modal Details (Place or Dish) */}
      <ModalDetails
        place={selectedPlace}
        dish={selectedDish}
        onClose={() => {
          setSelectedPlace(null);
          setSelectedDish(null);
        }}
      />

      {/* Gallery Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          item={galleryData[lightboxIndex]}
          index={lightboxIndex}
          total={galleryData.length}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % galleryData.length)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length)}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* Modal de Mis Favoritos (Wishlist) */}
      {favoritesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setFavoritesModalOpen(false)} />
          <div className="relative bg-surface-container-lowest dark:bg-stone-900 rounded-3xl max-w-md w-full max-h-[85vh] overflow-y-auto z-10 border border-outline-variant/30 shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-secondary fill-secondary" />
                <h3 className="font-headline-sm font-bold text-xl text-primary dark:text-white">Mis Favoritos</h3>
              </div>
              <button
                onClick={() => setFavoritesModalOpen(false)}
                className="p-1 rounded-lg text-outline hover:text-on-surface dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="font-body-sm text-xs text-on-surface-variant dark:text-stone-400 mb-4">
              Lugares y platos guardados para planificar tu itinerario por Cochabamba.
            </p>

            <div className="space-y-3 mb-6">
              {favorites.length === 0 ? (
                <p className="text-on-surface-variant text-xs text-center py-6">Aún no has guardado lugares ni platos favoritos.</p>
              ) : (
                favorites.map((fav) => (
                  <div key={fav.id} className="flex items-center justify-between p-2.5 rounded-2xl bg-surface-container dark:bg-stone-800 border border-outline-variant/30">
                    <div className="flex items-center gap-3">
                      <img src={fav.img} alt={fav.name} className="w-10 h-10 rounded-xl object-cover" />
                      <div>
                        <span className="text-xs font-bold text-on-surface dark:text-white block">{fav.name}</span>
                        <span className="text-[10px] text-primary dark:text-primary-fixed uppercase font-bold">{fav.type}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleFavorite(fav, fav.type)}
                      className="p-1.5 text-outline hover:text-error transition-colors"
                      title="Eliminar de favoritos"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
              <button
                onClick={clearFavorites}
                className="font-label-sm text-xs text-error font-semibold hover:underline"
              >
                Vaciar lista
              </button>
              <button
                onClick={copyFavoritesItinerary}
                className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs font-semibold transition-all flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar itinerario</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900/90 text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-lg border border-stone-700 pointer-events-none animate-fadeIn flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary hover:bg-primary-container text-white shadow-xl hover:scale-105 transition-all animate-fadeIn"
          title="Volver al inicio"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
