import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('¡Gracias por escribirnos! Nicolasa te responderá pronto.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-surface min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-32">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline-lg mb-4">
            Contáctanos
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            ¿Tienes alguna duda o quieres realizar un evento especial? Estamos aquí para escucharte y llevar el sabor criollo a tu mesa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* FORMULARIO */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Nombre Completo</label>
                <input 
                  type="text" name="nombre" required
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Ej. Juan Pérez"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Correo Electrónico</label>
                <input 
                  type="email" name="email" required
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="juan@ejemplo.com"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Mensaje</label>
                <textarea 
                  name="mensaje" rows="4" required
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-full hover:bg-primary-container transition-all active:scale-95"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* INFORMACIÓN DE CONTACTO */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Información de Visita</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">location_on</span>
                  <div>
                    <p className="font-bold text-on-surface">Dirección</p>
                    <p className="text-on-surface-variant">Calle de las Tradiciones 123, Miraflores, Lima - Perú</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">phone</span>
                  <div>
                    <p className="font-bold text-on-surface">Teléfono</p>
                    <p className="text-on-surface-variant">+51 1 234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">schedule</span>
                  <div>
                    <p className="font-bold text-on-surface">Horario de Atención</p>
                    <p className="text-on-surface-variant">Lunes a Domingo: 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAPA (Placeholder visual) */}
            <div className="w-full h-64 bg-surface-container-highest rounded-2xl border border-outline-variant/30 flex items-center justify-center overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=1000" 
                alt="Mapa de Miraflores" 
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
               />
               <span className="absolute font-bold text-primary bg-white/80 px-4 py-2 rounded-full shadow-sm">Ver en Google Maps</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contacto;