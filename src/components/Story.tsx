
import localImage from '../images/local.jpg'; // Asegúrate de que la ruta sea correcta

export default function Story() {
  return (
    <section id="historia" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={localImage}
              alt="Nuestra Historia"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-6 font-body">
            Genésica es una marca de lencería y ropa interior fundada en enero de 2020 en la ciudad de Formosa Capital. Surgió en un contexto desafiante: en plena pandemia. A pesar de las dificultades, la marca se abrió camino con determinación y pasión, motivada por el deseo de realzar la feminidad de las mujeres y hacerlas sentir hermosas y seguras con cada prenda que lleven.
            </p>
            <p className="text-gray-600 mb-8 font-body">
            El proyecto nació del sueño de su dueña de crear su propia empresa y ofrecer productos que no solo cumplan con altos estándares de calidad, sino que también celebren la diversidad y el poder de la mujer. Genésica busca ser una fuente de inspiración para todas aquellas mujeres que, sin importar su estilo o talla, quieran sentirse cómodas, atractivas y auténticas en su día a día.
            </p>  
            <p className="text-gray-600 mb-8 font-body">
            Desde su creación, la marca ha crecido significativamente, y hace un año y medio logró establecer su primer local físico en una ubicación céntrica de Formosa Capital, permitiendo a las clientas vivir la experiencia Genésica de manera más cercana y personalizada.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}