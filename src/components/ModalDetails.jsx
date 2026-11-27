import React from 'react';
import { X, MapPin, Clock, Calendar, Mountain, UtensilsCrossed } from 'lucide-react';

export default function ModalDetails({ place, dish, onClose }) {
  if (!place && !dish) return null;

  const isPlace = !!place;
  const item = place || dish;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />
      
      <div className="relative bg-surface-container-lowest dark:bg-stone-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 border border-outline-variant/30 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative aspect-[16/9] overflow-hidden bg-surface-container-high">
          <img 
            src={item.image} 
            alt={item.name} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = item.fallbackImage || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80';
            }}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="font-label-sm text-[10px] font-bold uppercase tracking-wider bg-primary text-white px-2.5 py-0.5 rounded-full mb-1 inline-block">
              {isPlace ? item.category : (item.badge || 'Gastronomía Típica')}
            </span>
            <h3 className="text-2xl font-serif font-black">{item.name}</h3>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h4 className="font-label-sm text-xs font-bold uppercase tracking-wider text-primary dark:text-primary-fixed mb-1">
              Descripción
            </h4>
            <p className="font-body-sm text-sm text-on-surface-variant dark:text-stone-300 leading-relaxed">
              {isPlace ? item.fullDescription : item.description}
            </p>
          </div>

          {isPlace ? (
            <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-outline-variant/30">
              <div className="p-3 bg-surface-container dark:bg-stone-800 rounded-2xl">
                <strong>Ubicación:</strong> {item.location}
              </div>
              <div className="p-3 bg-surface-container dark:bg-stone-800 rounded-2xl">
                <strong>Altitud:</strong> {item.altitude || '2,570 msnm'}
              </div>
              <div className="p-3 bg-surface-container dark:bg-stone-800 rounded-2xl">
                <strong>Horario / Acceso:</strong> {item.schedule || item.access}
              </div>
              <div className="p-3 bg-surface-container dark:bg-stone-800 rounded-2xl">
                <strong>Consejo:</strong> {item.tips || 'Llevar cámara y ropa cómoda.'}
              </div>
            </div>
          ) : (
            <div className="space-y-3 pt-2 border-t border-outline-variant/30 text-xs">
              {item.tradition && (
                <div className="p-3.5 bg-surface-container dark:bg-stone-800 rounded-2xl">
                  <strong className="block text-primary dark:text-primary-fixed mb-1 font-bold">Origen & Tradición:</strong>
                  <p className="text-on-surface-variant dark:text-stone-300 leading-relaxed">{item.tradition}</p>
                </div>
              )}
              {item.ingredients && (
                <div className="p-3.5 bg-surface-container dark:bg-stone-800 rounded-2xl">
                  <strong className="block text-secondary dark:text-secondary-fixed mb-1 font-bold">Ingredientes Clave:</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-on-surface-variant dark:text-stone-300">
                    {item.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
              )}
              {item.servingSuggestion && (
                <div className="p-3 bg-secondary-fixed/40 dark:bg-secondary/20 rounded-2xl text-secondary dark:text-secondary-fixed">
                  <strong>Recomendación:</strong> {item.servingSuggestion}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
