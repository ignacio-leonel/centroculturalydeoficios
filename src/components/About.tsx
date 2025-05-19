import React from 'react';
import { Users, Lightbulb, GraduationCap } from 'lucide-react';
import Carousel from './carousel'; // suponiendo que vas a usar un carrusel externo o propio

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">

        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">¿Quiénes somos?</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        {/* Texto de bienvenida */}
        <div className="max-w-3xl mx-auto text-center mb-12 text-lg leading-relaxed">
          <p className="mb-4">Este espacio es de todos y todas, hecho con amor, muchas ganas y esfuerzo colectivo.</p>
          <p className="mb-4">Nos mueve el deseo de compartir, aprender, encontrarnos y transformar. Acercate a los talleres, las actividades o simplemente a conocernos.</p>
          <p>Hacé clic en la imagen para ver fotos del lugar y lo que vamos construyendo entre todes.</p>
        </div>

        {/* Imagen destacada que abre el carrusel */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="cursor-pointer hover:opacity-90 transition-opacity duration-300">
            {/* Miniatura clickeable */}
            <img
              src="/images/localppal.jpeg"
              alt="Foto del centro"
              className="rounded-lg shadow-lg mx-auto max-h-[400px] object-cover"
              onClick={() => {
                const carousel = document.getElementById('gallery-carousel');
                if (carousel) carousel.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <p className="text-sm text-gray-600 mt-2">Tocá la foto para ver más</p>
          </div>
        </div>

       
        {/* Carrusel de fotos */}
        <div id="gallery-carousel" className="mt-20">
          <Carousel />
        </div>

      </div>
    </section>
  );
};

export default About;
