import React from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';

export default function Lightbox({ item, index, total, onNext, onPrev, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fadeIn">
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-30 w-12 h-12 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white flex items-center justify-center transition-colors border border-stone-700/60"
        aria-label="Cerrar visor"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white flex items-center justify-center transition-colors border border-stone-700/60"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white flex items-center justify-center transition-colors border border-stone-700/60"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main image container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[70vh] object-contain mx-auto"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="flex items-center justify-center space-x-3 mb-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-stone-900/90 px-3 py-1 rounded-full border border-stone-800">
              {item.category}
            </span>
            <span className="text-xs text-stone-400">
              {index + 1} de {total}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
            {item.title}
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm">
            {item.description}
          </p>
        </div>
      </div>

    </div>
  );
}
