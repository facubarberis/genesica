import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif mb-8">Visítanos</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Dirección</h3>
                  <p className="text-gray-600 font-body">
                    Av. Elegancia 123<br />
                    Distrito de Moda, Madrid 28001
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Horario</h3>
                  <p className="text-gray-600 font-body">
                    Lunes - Sábado: 10:00 - 20:00<br />
                    Domingo: 11:00 - 18:00
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Contacto</h3>
                  <p className="text-gray-600 font-body">
                    +34 912 345 678<br />
                    contacto@genesica.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Map integration would go here */}
            <div className="w-full h-full flex items-center justify-center text-gray-500 font-body">
              Integración del Mapa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}