import React, { useEffect } from 'react';

export default function Products() {
  useEffect(() => {
    // Cargar el script de Elfsight solo una vez
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="productos" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-4">Nuestros Productos</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Cada pieza está diseñada con atención al detalle y confeccionada con los materiales más finos
        </p>

        {/* Contenedor del widget de Elfsight */}
        <div className="elfsight-app-15c88053-ceb8-40cd-b295-4c0561641559" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}
