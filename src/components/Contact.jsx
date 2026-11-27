import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    }, 700);
  };

  return (
    <section id="contacto" className="py-24 bg-surface-container-low dark:bg-stone-950/80 border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary dark:text-primary-fixed mb-2 block font-bold">
            Escríbenos
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-5xl font-semibold text-primary dark:text-white mb-4">
            Contacto & Consultas
          </h2>
          <p className="font-body-sm text-on-surface-variant dark:text-stone-400 text-sm">
            ¿Planeas visitar Cochabamba o necesitas asesoría sobre rutas gastronómicas y atractivos turísticos? Déjanos tu mensaje.
          </p>
        </div>

        <div className="bg-surface-container-lowest dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-outline-variant/30 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-label-md text-xs font-semibold text-on-surface dark:text-stone-300 mb-2">
                  Nombre Completo *
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej. María Elena Rojas"
                  className="w-full px-4 py-3 rounded-2xl bg-surface-container-low dark:bg-stone-800/60 border border-outline-variant/30 text-sm text-on-surface dark:text-white focus:outline-none focus:border-primary dark:focus:border-primary-fixed transition-colors"
                />
              </div>
              <div>
                <label className="block font-label-md text-xs font-semibold text-on-surface dark:text-stone-300 mb-2">
                  Correo Electrónico *
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ejemplo@correo.com"
                  className="w-full px-4 py-3 rounded-2xl bg-surface-container-low dark:bg-stone-800/60 border border-outline-variant/30 text-sm text-on-surface dark:text-white focus:outline-none focus:border-primary dark:focus:border-primary-fixed transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-md text-xs font-semibold text-on-surface dark:text-stone-300 mb-2">
                Asunto *
              </label>
              <input 
                type="text" 
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Ej. Consulta sobre ruta gastronómica o visita al Tunari"
                className="w-full px-4 py-3 rounded-2xl bg-surface-container-low dark:bg-stone-800/60 border border-outline-variant/30 text-sm text-on-surface dark:text-white focus:outline-none focus:border-primary dark:focus:border-primary-fixed transition-colors"
              />
            </div>

            <div>
              <label className="block font-label-md text-xs font-semibold text-on-surface dark:text-stone-300 mb-2">
                Mensaje *
              </label>
              <textarea 
                rows="4" 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntanos tus planes de viaje, fechas estimadas o preguntas..."
                className="w-full px-4 py-3 rounded-2xl bg-surface-container-low dark:bg-stone-800/60 border border-outline-variant/30 text-sm text-on-surface dark:text-white focus:outline-none focus:border-primary dark:focus:border-primary-fixed transition-colors"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-2xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Enviando mensaje...' : 'Enviar Mensaje'}</span>
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-4 rounded-2xl bg-primary-fixed/20 border border-primary/30 text-primary dark:text-primary-fixed text-center text-sm font-medium flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
