import React from 'react';

const products = [
  {
    id: 1,
    name: "Colección Sueños de Seda",
    description: "Delicada y sofisticada",
    image: "https://images.unsplash.com/photo-1616244013240-227ec9abfefb?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Encanto de Encaje",
    description: "Romántica y elegante",
    image: "https://images.unsplash.com/photo-1619532839273-c69e28244b43?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Romance Nocturno",
    description: "Misteriosa y seductora",
    image: "https://images.unsplash.com/photo-1619532839912-c379c726cf80?auto=format&fit=crop&q=80"
  }
];

export default function Products() {
  return (
    <section id="productos" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-4">Nuestros Productos</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Cada pieza está diseñada con atención al detalle y confeccionada con los materiales más finos
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-serif mb-2">{product.name}</h3>
                    <p className="text-white/90 font-body">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}