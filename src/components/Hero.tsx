import React from 'react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section
      className="relative text-white min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#00bf63' }}
    >
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Imagen de fondo opcional */}
      <div className="absolute inset-0 bg-cover bg-center"></div>

      {/* Logo animado */}
      <div
  className="absolute z-0 animate-slideIn animate-logoPulse"
  style={{ top: '15%', left: '50%', transform: 'translateX(-50%)' }}
>
  <img
    src="/images/logolimpio.png"
    alt="Imagen animada"
    className="w-[300px] h-[200px] object-contain sm:max-w-sm md:max-w-md lg:max-w-lg"
  />
</div>


      {/* Contenido central */}
      <div className="container mx-auto px-4 relative z-10 mt-44">
        <div className="max-w-2xl mx-auto text-center">
          {/* Texto animado con delay */}
          <div
            className="text-xl md:text-2xl opacity-0 animate-fadeInText space-y-4"
            style={{ color: 'white' }}
          >
            <p>Espacio dedicado a acercar a los vecinos paceños la posibilidad de capacitarse en oficios mediante cursos y talleres.</p>
            <p>Te invitamos a conocer las propuestas que tenemos en este momento y a conocer un poco más acerca de esta comunidad.</p>
          </div>

          {/* Botón animado con pop effect */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fadeInButton mt-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all duration-300 transform hover:scale-105 cursor-pointer text-center animate-popIn"
            >
              Ingresar al sitio
            </Link>
          </div>
        </div>
      </div>

      

      {/* Animaciones personalizadas */}
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateX(-100%) translateY(0);
              opacity: 0;
            }
            100% {
              transform: translateX(-50%) translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeInText {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInButton {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }

          .animate-slideIn {
            animation: slideIn 1.5s ease-out forwards;
          }

          .animate-fadeInText {
            animation: fadeInText 1s ease-out forwards;
            animation-delay: 2s;
          }

          .animate-fadeInButton {
            animation: fadeInButton 1s ease-out forwards;
            animation-delay: 4s;
          }

          @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          .animate-popIn {
            animation: popIn 0.6s ease-out forwards;
            animation-delay: 4.2s;
          }
            @keyframes logoPulse {
  0%, 100% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.03);
  }
}

.animate-logoPulse {
  animation: logoPulse 6s ease-in-out infinite;
}

        `}
      </style>
    </section>
  );
};

export default Hero;
