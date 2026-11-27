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

import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');

  // Modal details state
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Scroll to section handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
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
  const filteredPlaces = touristPlaces.filter(p => {
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'todos' || activeCategory === 'turismo';
    return matchesSearch && matchesCat;
  });

  // Filtered dishes
  const filteredDishes = gastronomyData.filter(d => {
    const matchesSearch = searchQuery === '' ||
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tradition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'todos' || activeCategory === 'gastronomia';
    return matchesSearch && matchesCat;
  });

  // Filtered restaurants
  const filteredRestaurants = restaurantsData.filter(r => {
    const matchesSearch = searchQuery === '' ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.zone.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'todos' || activeCategory === 'restaurantes';
    return matchesSearch && matchesCat;
  });

  const totalResults = filteredPlaces.length + filteredDishes.length + filteredRestaurants.length;

  // Open Lightbox
  const handleOpenLightbox = (item, index) => {
    setLightboxIndex(index);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryData.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-600 selection:text-white">
      
      {/* Navigation */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

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

      {/* Lugares Turisticos */}
      {(activeCategory === 'todos' || activeCategory === 'turismo') && (
        <TouristPlaces 
          places={filteredPlaces} 
          onSelectPlace={(place) => setSelectedPlace(place)} 
        />
      )}

      {/* Gastronomia */}
      {(activeCategory === 'todos' || activeCategory === 'gastronomia') && (
        <Gastronomy 
          dishes={filteredDishes} 
          onSelectDish={(dish) => setSelectedDish(dish)} 
        />
      )}

      {/* Restaurantes */}
      {(activeCategory === 'todos' || activeCategory === 'restaurantes') && (
        <Restaurants 
          restaurants={filteredRestaurants} 
        />
      )}

      {/* Cultura y Tradiciones */}
      <Culture traditions={cultureData} />

      {/* Galeria */}
      <Gallery 
        items={galleryData} 
        onOpenLightbox={handleOpenLightbox} 
      />

      {/* Contacto */}
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
          onNext={handleNextLightbox}
          onPrev={handlePrevLightbox}
          onClose={handleCloseLightbox}
        />
      )}

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-xl shadow-black/50 hover:scale-110 transition-all border border-amber-400/30"
        title="Volver arriba"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </div>
  );
}
