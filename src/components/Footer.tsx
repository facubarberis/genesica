import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Genésica</h3>
            <p className="text-gray-400 font-body">Lencería de lujo para la mujer moderna</p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#productos" className="text-gray-400 hover:text-white">Colecciones</a></li>
              <li><a href="#historia" className="text-gray-400 hover:text-white">Nuestra Historia</a></li>
              <li><a href="#ubicacion" className="text-gray-400 hover:text-white">Visítanos</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Atención al Cliente</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#" className="text-gray-400 hover:text-white">Envíos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Devoluciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Guía de Tallas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-body">
          <p>&copy; {new Date().getFullYear()} Genésica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}