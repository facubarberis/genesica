import { Clock, MapPin, Phone } from 'lucide-react';

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
                    Rivadavia 448<br />
                    Formosa Capital
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Horario</h3>
                  <p className="text-gray-600 font-body">
                    Lunes - Viernes: 09:30 - 12:30 / 17:00 - 20:30 <br />
                    Sábado: 9:30 - 13:00
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Contacto</h3>
                  <p className="text-gray-600 font-body">
                    +54 9 370 481 6108<br />
                    luzbinim@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.547435550512!2d-58.1702280236827!3d-26.17886456294425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945ca5e7e1eb1661%3A0xd84bc8a5cab9d7bc!2sRivadavia%20448%2C%20P3600%20Formosa!5e0!3m2!1ses-419!2sar!4v1731362543495!5m2!1ses-419!2sar" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            ></iframe>
            
          </div>
        </div>
      </div>
    </section>
  );
}
