import React from 'react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center"
    style={{ backgroundColor: '#00bf63' }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/localcentro.png')", opacity: 0.5 }}
        
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Aprendé, crecé y conectá con tu futuro
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Centro cultural y de oficios dedicado a poder hacer que todos los paceños puedan
            adquirir conocimientos que ayuden a expandir sus posibilidades de insertarse en el mercado laboral
                    </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="courses"
              smooth={true}
              duration={500}
              className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-center"
            >
              Ver Cursos
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors duration-300 cursor-pointer text-center"
            >
              Inscribirme
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="animate-bounce cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 19V5"/>
            <path d="m5 12 7 7 7-7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;