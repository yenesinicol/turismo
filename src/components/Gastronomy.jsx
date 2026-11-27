import React from 'react';
import { 
  Flame, 
  UtensilsCrossed, 
  BookOpen, 
  Heart, 
  Sparkles, 
  Calendar, 
  Lightbulb, 
  Leaf 
} from 'lucide-react';

export default function Gastronomy({ dishes, onSelectDish, favorites = [], onToggleFavorite }) {
  // Spiciness flame count helper
  const getFlameCount = (dish) => {
    if (dish.id === 'pique-macho') return 3;
    if (dish.id === 'chicharron' || dish.id === 'anticucho') return 2;
    if (dish.id === 'silpancho' || dish.id === 'pampaku') return 1;
    return 0;
  };

  const getFlameLabel = (count) => {
    if (count === 3) return 'Fuerte';
    if (count === 2) return 'Medio';
    if (count === 1) return 'Suave';
    return 'Cremoso';
  };

  return (
    <section id="gastronomia" className="py-24 bg-surface-container-low dark:bg-stone-950/80 border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-12">
        
        {/* Hero Banner Stitch (UNESCO Ciudad Creativa - Node b4677bcf3378430b86fc1f2ab211523c) */}
        <div className="relative overflow-hidden rounded-3xl bg-primary text-on-primary shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80')` }}
          />
          <div className="relative z-10 p-6 sm:p-10 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-tertiary-fixed font-label-sm text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-tertiary-fixed fill-tertiary-fixed" />
              <span>UNESCO CIUDAD CREATIVA GASTRONÓMICA</span>
            </div>
            
            <h2 className="font-display-hero text-3xl sm:text-5xl font-bold tracking-tight text-on-primary">
              Cochabamba: El Corazón Culinario
            </h2>
            
            <p className="font-body-md text-sm sm:text-base text-surface-container-high leading-relaxed max-w-3xl">
              En los valles vallunos, la comida es devoción. Existe un mandato popular incuestionable: <span className="italic text-tertiary-fixed font-medium">"Aquí no se come para vivir, se vive para comer"</span>. Platos monumentales, aromas a fogón de leña y la calidez de una tierra bendecida por su generosa cosecha.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
              <div className="bg-surface-container-lowest/10 backdrop-blur-sm rounded-2xl p-3 text-center border border-white/10">
                <span className="block font-headline-sm text-xl font-bold text-tertiary-fixed">100%</span>
                <span className="font-label-sm text-xs text-surface-container-high">Abundancia</span>
              </div>
              <div className="bg-surface-container-lowest/10 backdrop-blur-sm rounded-2xl p-3 text-center border border-white/10">
                <span className="block font-headline-sm text-xl font-bold text-tertiary-fixed">Batán</span>
                <span className="font-label-sm text-xs text-surface-container-high">Tradición Viva</span>
              </div>
              <div className="bg-surface-container-lowest/10 backdrop-blur-sm rounded-2xl p-3 text-center border border-white/10">
                <span className="block font-headline-sm text-xl font-bold text-tertiary-fixed">#1</span>
                <span className="font-label-sm text-xs text-surface-container-high">Sabor de Bolivia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Platos Icónicos Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold block mb-1">
              Rutas & Estilo Valluno
            </span>
            <h3 className="font-headline-lg text-3xl sm:text-4xl font-semibold text-primary dark:text-white">
              Platos Icónicos
            </h3>
          </div>
          <p className="font-body-sm text-on-surface-variant dark:text-stone-400 text-sm max-w-md mt-2 md:mt-0 leading-relaxed">
            La máxima expresión de generosidad culinaria, con ingredientes cultivados en la tierra fértil de los valles.
          </p>
        </div>

        {/* Dish Cards Grid (Exact Stitch Dish Card Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => {
            const isFav = favorites.some((f) => f.id === dish.id);
            const flameCount = getFlameCount(dish);
            const flameLabel = getFlameLabel(flameCount);

            return (
              <article 
                key={dish.id}
                className="flex flex-col bg-surface-container-lowest dark:bg-stone-900 rounded-3xl overflow-hidden shadow-md border border-outline-variant/30 justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-cover bg-center group">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = dish.fallbackImage || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-xs font-bold shadow-sm">
                        {dish.badge || 'Icono Cochabambino'}
                      </span>
                    </div>

                    {/* Wishlist Button */}
                    <button 
                      onClick={() => onToggleFavorite && onToggleFavorite(dish)}
                      className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md flex items-center justify-center transition-colors shadow-sm ${
                        isFav ? 'text-secondary' : 'text-stone-400 hover:text-secondary'
                      }`}
                      title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-secondary' : ''}`} />
                    </button>

                    {/* Bottom Info & Heat Level */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <h4 className="font-headline-sm text-2xl text-white font-bold leading-tight">
                          {dish.name}
                        </h4>
                        <span className="font-label-sm text-xs text-stone-200">
                          {dish.quechua || dish.tagline}
                        </span>
                      </div>

                      {/* Heat Indicator */}
                      <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-xl px-2.5 py-1 flex items-center gap-0.5 text-secondary shadow-sm">
                        {flameCount > 0 ? (
                          Array.from({ length: flameCount }).map((_, idx) => (
                            <Flame key={idx} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                          ))
                        ) : (
                          <Sparkles className="w-3.5 h-3.5 text-secondary" />
                        )}
                        <span className="font-label-sm text-xs font-bold text-on-surface ml-1">
                          {flameLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <p className="font-body-sm text-sm text-on-surface-variant dark:text-stone-300 leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Key Ingredients Chip Grid */}
                    {dish.ingredients && (
                      <div className="bg-surface-container-low dark:bg-stone-800/60 rounded-2xl p-3 border border-outline-variant/30">
                        <span className="block font-label-sm text-[11px] uppercase tracking-wider text-secondary font-bold mb-1.5">
                          Ingredientes de la Llajta
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {dish.ingredients.slice(0, 4).map((ing, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-0.5 rounded-lg bg-surface-container-lowest dark:bg-stone-700 text-on-surface-variant dark:text-stone-200 text-[11px] font-medium"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => onSelectDish(dish)}
                    className="w-full py-2.5 px-4 rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container font-label-md text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Ver receta & detalles</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Feature Card 1: La Llajwa: Piedra y Fuego (Exact Stitch Section 2) */}
        <div className="rounded-3xl bg-secondary-fixed text-on-secondary-fixed p-6 sm:p-8 shadow-md relative overflow-hidden border border-secondary/20">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-sm text-on-secondary">
              <Leaf className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-xs uppercase tracking-widest text-on-secondary-fixed-variant font-bold">
                  El Alma de la Mesa
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-xs font-bold">
                  Ritual
                </span>
              </div>
              <h4 className="font-headline-sm text-2xl text-on-secondary-fixed font-semibold mt-1">
                La Llajwa: Piedra y Fuego
              </h4>
              <p className="font-body-sm text-sm text-on-secondary-fixed-variant mt-2 leading-relaxed">
                No se licúa: se muele con cadencia sobre el milenario <strong className="text-on-secondary-fixed font-bold">batán de piedra granítica</strong>. Combina tomate jugoso madurado al sol valluno, el picor vivo del <strong className="text-on-secondary-fixed font-bold">locoto verde o rojo</strong> y el perfume inconfundible de la hierba silvestre <strong className="text-on-secondary-fixed font-bold">quirquiña</strong> (o suico). Sin llajwa recién molida, ninguna comida cochabambina está completa.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-xl bg-surface-container-lowest/80 text-secondary font-label-sm text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Flame className="w-3.5 h-3.5" /> Locoto picante
                </span>
                <span className="px-3 py-1 rounded-xl bg-surface-container-lowest/80 text-secondary font-label-sm text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Leaf className="w-3.5 h-3.5" /> Quirquiña fresca
                </span>
                <span className="px-3 py-1 rounded-xl bg-surface-container-lowest/80 text-secondary font-label-sm text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" /> Batán de río
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Card 2: ¿Dónde comer como un verdadero 'k'ochala'? (Exact Stitch Section 3) */}
        <div className="bg-surface-container-high dark:bg-stone-900 rounded-3xl p-6 sm:p-8 flex flex-col gap-3 text-on-surface dark:text-stone-200 border border-outline-variant/30">
          <div className="flex items-center gap-2 text-primary dark:text-primary-fixed">
            <Lightbulb className="w-5 h-5" />
            <span className="font-label-md text-xs uppercase tracking-wider font-bold">Consejo del Viajero Experto</span>
          </div>
          <h4 className="font-headline-sm text-2xl font-semibold text-primary dark:text-white">
            ¿Dónde comer como un verdadero 'k'ochala'?
          </h4>
          <p className="font-body-sm text-sm text-on-surface-variant dark:text-stone-300 leading-relaxed">
            Visita el <strong>Mercado 25 de Mayo</strong> y el <strong>Mercado Calatayud</strong> antes de las 11:30 AM. En Cochabamba, el almuerzo es sagrado: pide siempre <span className="italic text-secondary font-bold">"con yapita"</span> (la porción extra de cortesía) y acompáñalo con abundante llajwa fresca recién salida del batán.
          </p>
        </div>

        {/* Calendario Gastronómico Semanal de Cochabamba */}
        <div className="bg-surface-container-lowest dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-outline-variant/30 shadow-md">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-primary dark:text-primary-fixed">
            <Calendar className="w-4 h-4" />
            <span>Semana Valluna • Costumbre Culinaria Tradicional</span>
          </div>
          <h4 className="font-headline-sm text-2xl font-bold text-primary dark:text-white mb-6">
            ¿Qué plato se come cada día en Cochabamba?
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            <div className="p-3.5 rounded-2xl bg-surface-container dark:bg-stone-800 text-center border border-outline-variant/20">
              <span className="block font-label-sm text-xs font-bold text-primary dark:text-primary-fixed uppercase">Lunes</span>
              <span className="text-sm font-semibold text-on-surface dark:text-white block mt-1">Enrollado</span>
              <span className="text-[11px] text-on-surface-variant dark:text-stone-400">con escabeche</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-container dark:bg-stone-800 text-center border border-outline-variant/20">
              <span className="block font-label-sm text-xs font-bold text-primary dark:text-primary-fixed uppercase">Martes</span>
              <span className="text-sm font-semibold text-on-surface dark:text-white block mt-1">Chanka</span>
              <span className="text-[11px] text-on-surface-variant dark:text-stone-400">pollo y conejo</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-container dark:bg-stone-800 text-center border border-outline-variant/20">
              <span className="block font-label-sm text-xs font-bold text-primary dark:text-primary-fixed uppercase">Miércoles</span>
              <span className="text-sm font-semibold text-on-surface dark:text-white block mt-1">Riñón</span>
              <span className="text-[11px] text-on-surface-variant dark:text-stone-400">al jugo y papas</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-container dark:bg-stone-800 text-center border border-outline-variant/20">
              <span className="block font-label-sm text-xs font-bold text-primary dark:text-primary-fixed uppercase">Jueves</span>
              <span className="text-sm font-semibold text-on-surface dark:text-white block mt-1">Fideos Uchu</span>
              <span className="text-[11px] text-on-surface-variant dark:text-stone-400">ají picante valluno</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-container dark:bg-stone-800 text-center border border-outline-variant/20">
              <span className="block font-label-sm text-xs font-bold text-primary dark:text-primary-fixed uppercase">Viernes</span>
              <span className="text-sm font-semibold text-on-surface dark:text-white block mt-1">Lechón</span>
              <span className="text-[11px] text-on-surface-variant dark:text-stone-400">al horno crujiente</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-container dark:bg-stone-800 text-center border border-outline-variant/20">
              <span className="block font-label-sm text-xs font-bold text-primary dark:text-primary-fixed uppercase">Sábado</span>
              <span className="text-sm font-semibold text-on-surface dark:text-white block mt-1">Lawa y Chicha</span>
              <span className="text-[11px] text-on-surface-variant dark:text-stone-400">choclo tierno</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-secondary-fixed/40 dark:bg-secondary/20 text-center border border-secondary/30">
              <span className="block font-label-sm text-xs font-bold text-secondary dark:text-secondary-fixed uppercase">Domingo</span>
              <span className="text-sm font-bold text-on-surface dark:text-white block mt-1">Chicharrón</span>
              <span className="text-[11px] text-secondary dark:text-secondary-container font-semibold">& Pique Macho</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
