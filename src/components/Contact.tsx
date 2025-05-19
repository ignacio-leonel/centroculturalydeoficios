import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-white" style={{ backgroundColor: '#00bf63' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-8">
            <p>¿Querés inscribirte en alguno de los cursos?</p>
            <p>¿Te gustaría recibir más informacion acerca de una actividad?</p>
            <p>Comunicate con nosotros a través de Whats app asi te brindamos la información que necesitas</p>
          </p>
         
          <a
            href="https://wa.me/541156417859"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-green-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
           <FaWhatsapp size={20}  /> 
              WhatsApp
          </a>
          
          
            
          
        </div>
      </div>
    </section>
  );
};

export default Contact;