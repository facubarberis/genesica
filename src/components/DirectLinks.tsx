import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export default function DirectLinks() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">Enlaces Directos</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://wa.me/c/5493704816108"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Catálogo en WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/genesica_fsa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>Síguenos en Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}