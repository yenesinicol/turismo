import React from 'react';

export default function Culture({ traditions }) {
  return (
    <section id="cultura" className="py-24 bg-surface-container-low dark:bg-stone-950/80 border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-2 block font-bold">
              Patrimonio Vivo & Festividades
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-5xl font-semibold text-primary dark:text-white">
              Cultura & Tradición
            </h2>
          </div>
          <p className="font-body-sm text-on-surface-variant dark:text-stone-400 text-sm max-w-md mt-4 md:mt-0">
            La devoción popular, los carnavales vallunos y los rituales ancestrales transmitidos de generación en generación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {traditions.map((trad) => (
            <article 
              key={trad.id}
              className="bg-surface-container-lowest dark:bg-stone-900 rounded-3xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/2 relative aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-container-high">
                <img 
                  src={trad.image} 
                  alt={trad.title} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = trad.fallbackImage || 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
                <span className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {trad.tag}
                </span>
              </div>

              <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-xs font-semibold text-secondary block mb-1">
                    {trad.place}
                  </span>
                  <h3 className="font-headline-sm text-xl font-bold text-primary dark:text-white mb-2.5">
                    {trad.title}
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant dark:text-stone-300 leading-relaxed mb-3">
                    {trad.description}
                  </p>
                </div>

                {trad.details && (
                  <div className="text-[11px] text-on-surface-variant dark:text-stone-400 bg-surface-container dark:bg-stone-800 p-2.5 rounded-xl border border-outline-variant/20">
                    {trad.details}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
