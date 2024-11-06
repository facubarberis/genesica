import React from 'react';

export default function Story() {
  return (
    <section id="historia" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80"
              alt="Nuestra Historia"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-6 font-body">
              Fundada con pasión por María González en 2015, Genésica nació del deseo de crear
              lencería que combine elegancia y comodidad. Nuestra journey comenzó con una simple
              creencia: cada mujer merece sentirse hermosa y segura en su propia piel.
            </p>
            <p className="text-gray-600 mb-8 font-body">
              Seleccionamos cuidadosamente los materiales más finos y trabajamos con artesanos
              expertos para crear piezas que celebran la feminidad en todas sus formas. Cada
              colección está diseñada con atención al detalle y un compromiso con la calidad
              que se ha convertido en nuestra firma.
            </p>
            <button className="text-primary border-b-2 border-primary hover:text-primary/70 hover:border-primary/70 transition-colors font-body">
              Leer Más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}