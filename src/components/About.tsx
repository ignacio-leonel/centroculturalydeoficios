import React from 'react';
import Carousel from './Carousel'; // Asegurate de que Carousel funcione sin modal

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

        {/* Carrusel visible siempre */}
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <Carousel />
          <p className="text-sm text-gray-600 mt-4">Imágenes de nuestro rincón, ubicado en Alem y Pueyrredón</p>
        </div>

      </div>
    </section>
  );
};

export default About;
