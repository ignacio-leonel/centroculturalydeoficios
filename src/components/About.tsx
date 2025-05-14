import React from 'react';
import { Users, Lightbulb, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            Somos un espacio comunitario donde promovemos la formación gratuita o a bajo costo 
            en oficios, programación e informática para todas las edades.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-8 rounded-lg text-center transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Comunidad</h3>
            <p className="text-gray-600">
              Creamos un espacio inclusivo donde todos pueden aprender y crecer juntos.
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg text-center transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Aprendizaje</h3>
            <p className="text-gray-600">
              Ofrecemos cursos prácticos y relevantes para el mundo laboral actual.
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg text-center transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Futuro</h3>
            <p className="text-gray-600">
              Impulsamos el desarrollo personal y profesional para transformar realidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;