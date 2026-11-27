import React from 'react';
import { X, MapPin, Clock, Calendar, CheckCircle2, Compass, AlertCircle } from 'lucide-react';

export default function ModalDetails({ place, dish, onClose }) {
  if (!place && !dish) return null;

  const isPlace = !!place;
  const item = place || dish;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-stone-950 border border-stone-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-white animate-scaleUp">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900/90 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center border border-stone-700/60 shadow-lg transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image in modal */}
        <div className="relative h-72 sm:h-80 overflow-hidden rounded-t-3xl">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
              {isPlace ? item.category : 'Gastronomía Típica'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white drop-shadow-md">
              {item.name}
            </h2>
            {item.tagline && (
              <p className="text-amber-300 text-xs sm:text-sm font-medium italic mt-1">
                "{item.tagline}"
              </p>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Description */}
          <div>
            <h3 className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-2">
              Descripción General
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {isPlace ? item.fullDescription : item.description}
            </p>
          </div>

          {/* Place specific details */}
          {isPlace && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-900/70 p-4 rounded-2xl border border-stone-800 text-xs sm:text-sm">
                <div>
                  <span className="text-stone-400 block font-semibold">📍 Ubicación:</span>
                  <span className="text-stone-200 font-medium">{item.location}</span>
                </div>
                <div>
                  <span className="text-stone-400 block font-semibold">⛰️ Altitud:</span>
                  <span className="text-stone-200 font-medium">{item.altitude}</span>
                </div>
                <div>
                  <span className="text-stone-400 block font-semibold">🕒 Horarios de Visita:</span>
                  <span className="text-stone-200 font-medium">{item.schedule}</span>
                </div>
                <div>
                  <span className="text-stone-400 block font-semibold">🚗 Cómo Llegar:</span>
                  <span className="text-stone-200 font-medium">{item.access}</span>
                </div>
              </div>

              {item.highlights && (
                <div>
                  <h4 className="text-xs uppercase font-bold text-emerald-400 tracking-wider mb-2">
                    Puntos Destacados
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-stone-300 bg-stone-900/40 p-2 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.tips && (
                <div className="bg-amber-950/40 border border-amber-600/30 p-4 rounded-2xl text-xs sm:text-sm text-amber-200/90">
                  <span className="font-bold block text-amber-300 mb-1">💡 Consejo para tu visita:</span>
                  {item.tips}
                </div>
              )}
            </div>
          )}

          {/* Dish specific details */}
          {!isPlace && (
            <div className="space-y-4">
              <div className="bg-stone-900/80 p-5 rounded-2xl border border-stone-800">
                <h4 className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-2">
                  📜 Historia, Origen & Tradición
                </h4>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {item.tradition}
                </p>
              </div>

              {item.ingredients && (
                <div>
                  <h4 className="text-xs uppercase font-bold text-orange-400 tracking-wider mb-2">
                    🥗 Ingredientes Tradicionales
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ing, idx) => (
                      <span key={idx} className="bg-stone-900 border border-stone-800 text-stone-300 text-xs px-3 py-1.5 rounded-xl">
                        • {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.servingSuggestion && (
                <div className="bg-emerald-950/40 border border-emerald-600/30 p-4 rounded-2xl text-xs sm:text-sm text-emerald-200/90">
                  <span className="font-bold block text-emerald-300 mb-1">🍽️ Sugerencia de Consumo:</span>
                  {item.servingSuggestion}
                </div>
              )}
            </div>
          )}

          {/* Bottom close button */}
          <div className="pt-4 border-t border-stone-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Cerrar Detalle
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
