import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import genesicaImage from '../images/genesica.svg'; // Asegúrate de que la ruta sea correcta

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            {/* Aquí se muestra el SVG en lugar del texto "Genésica" */}
            <img src={genesicaImage} alt="Logo de Genésica" className="h-10" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#productos" className="text-dark hover:text-primary transition-colors">Productos</a>
            <a href="#historia" className="text-dark hover:text-primary transition-colors">Historia</a>
            <a href="#ubicacion" className="text-dark hover:text-primary transition-colors">Ubicación</a>
            <a href="#contacto" className="text-dark hover:text-primary transition-colors">Contacto</a>
          </div>

          <button 
            className="md:hidden p-2 text-dark hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#productos" 
                className="block px-3 py-2 text-dark hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Productos
              </a>
              <a 
                href="#historia" 
                className="block px-3 py-2 text-dark hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Historia
              </a>
              <a 
                href="#ubicacion" 
                className="block px-3 py-2 text-dark hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Ubicación
              </a>
              <a 
                href="#contacto" 
                className="block px-3 py-2 text-dark hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
