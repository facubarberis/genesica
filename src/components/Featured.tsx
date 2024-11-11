import React from 'react';

const Featured = () => {
  const collections = [
    {
      title: "Signature Collection",
      image: "https://images.unsplash.com/photo-1616244013240-227ec9abfefb?auto=format&fit=crop&q=80",
      description: "Timeless elegance meets modern comfort"
    },
    {
      title: "Bridal Series",
      image: "https://images.unsplash.com/photo-1619532839273-c69e28244b43?auto=format&fit=crop&q=80",
      description: "Special pieces for your special day"
    },
    {
      title: "Everyday Luxury",
      image: "https://images.unsplash.com/photo-1619532839912-c379c726cf80?auto=format&fit=crop&q=80",
      description: "Comfort without compromising style"
    }
  ];

  return (
    <section id="featured" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Featured Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections, designed to make you feel confident and beautiful.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-serif text-white mb-2">{collection.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{collection.description}</p>
                <button className="w-full py-2 bg-white/20 text-white rounded backdrop-blur-sm hover:bg-white/30 transition-colors">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;