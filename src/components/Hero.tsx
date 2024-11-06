import React from 'react';
import genesicaImage from '../images/genesica.svg';
import backgroundImage from '../images/background.png';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Elegante colección de lencería"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <img
            src={genesicaImage}
            alt="Logo de Genésica"
            className="w-full h-auto"
            style={{ fill: '#970954' }}
          />

          <p className="text-lg md:text-xl text-white/90 mb-8 font-body">
            Descubre nuestra exclusiva colección de lencería que celebra la belleza natural de cada mujer
          </p>
          <a
            href="#productos"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Ver Colección
          </a>
        </div>
      </div>
    </div>
  );
}
