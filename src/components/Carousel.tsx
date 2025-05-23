import React, { useState } from 'react';

const images = [
  
  '/images/localppal.jpeg',
  '/images/local1.png',
  '/images/local3.jpeg',
  '/images/local4.jpeg',
  '/images/local5.jpeg',
  '/images/local6.jpeg',
];

interface CarouselProps {
  onClose?: () => void; // función para cerrar el carrusel
}

const Carousel: React.FC<CarouselProps> = ({ onClose }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg">
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-700 hover:text-red-600 text-3xl font-bold"
        aria-label="Cerrar carrusel"
      >
        &times;
      </button>

      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[current]}
          alt={`Foto ${current + 1}`}
          className="w-full h-[400px] object-cover transition-all duration-500"
        />
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 rounded-full p-2 shadow hover:bg-green-100 transition"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 rounded-full p-2 shadow hover:bg-green-100 transition"
        aria-label="Siguiente"
      >
        ›
      </button>

      {/* Puntos indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-green-500' : 'bg-gray-300'
            }`}
            aria-label={`Ir a foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
