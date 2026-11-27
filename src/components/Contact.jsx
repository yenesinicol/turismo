import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    setStatus({ submitted: false, loading: true, message: '' });

    // Simulate sending with nice feedback
    setTimeout(() => {
      setStatus({
        submitted: true,
        loading: false,
        message: '¡Gracias por contactarnos! Tu mensaje ha sido recibido con éxito. Te responderemos a la brevedad con la mejor información sobre Cochabamba.'
      });
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      });
    }, 800);
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Planifica Tu Viaje</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Contáctanos y <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400">Descubre Cochabamba</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            ¿Tienes consultas sobre itinerarios, recomendaciones de restaurantes, hoteles o transporte? Escríbenos y nuestro equipo te guiará.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Card (Left 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-700/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Información Turística de Cochabamba
            </h3>
            
            <div className="space-y-6 text-sm text-stone-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-stone-400">Oficina Principal</span>
                  <p className="text-white font-medium mt-0.5">
                    Plaza 14 de Septiembre (Acera Este), Centro Histórico de Cochabamba, Bolivia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-stone-400">Teléfono & WhatsApp</span>
                  <p className="text-white font-medium mt-0.5">
                    +591 4 4258030 | +591 71720330
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-stone-400">Correo Electrónico</span>
                  <p className="text-white font-medium mt-0.5">
                    turismo@cochabamba.travel.bo
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-600/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-stone-400">Horarios de Atención</span>
                  <p className="text-white font-medium mt-0.5">
                    Lunes a Viernes: 08:30 - 18:30 <br />
                    Sábados: 09:00 - 13:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 bg-stone-900/50 p-4 rounded-2xl">
              <span className="text-xs text-amber-400 font-bold block mb-1">💡 Consejo del Viajero</span>
              <p className="text-xs text-stone-400 leading-relaxed">
                El clima en Cochabamba es agradable y primaveral todo el año (promedio 20°C). Recomendamos ropa ligera para el día y un abrigo suave para las noches frescas.
              </p>
            </div>
          </div>

          {/* Form Card (Right 7 cols) */}
          <div className="lg:col-span-7 bg-stone-900/80 border border-stone-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Envíanos un Mensaje
            </h3>
            <p className="text-stone-400 text-sm mb-6">
              Completa el formulario y te enviaremos guías turísticas gratuitas, mapas gastronómicos y consejos locales.
            </p>

            {status.submitted && (
              <div className="mb-6 bg-emerald-950/80 border border-emerald-500 text-emerald-200 p-4 rounded-2xl flex items-start space-x-3 text-sm animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-300">¡Mensaje Enviado!</p>
                  <p className="text-xs mt-1 text-emerald-200/90">{status.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Roberto Martínez"
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  name="asunto"
                  required
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Ej. Consulta sobre tours al Parque Tunari y Ruta del Pique Macho"
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe aquí tus preguntas, fechas estimadas de viaje o requerimientos especiales..."
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-950/50 hover:shadow-orange-700/40 transition-all flex items-center justify-center space-x-2"
              >
                {status.loading ? (
                  <span>Enviando mensaje...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
