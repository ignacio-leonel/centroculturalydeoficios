import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center justify-items-center items-start">

          {/* Logo */}
          <div className="flex flex-col items-center justify-center max-w-xs mx-auto">
            <img
              src="/images/logo_centro.png"
              alt="Logo Centro Cultural"
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* Dirección */}
          <div className="flex flex-col items-center justify-center max-w-xs mx-auto">
  <h3 className="text-xl font-bold mb-3">
    Centro Cultural y de Oficios
  </h3>
  <a
    href="https://maps.app.goo.gl/Ah7Ub9dr88mSNTAk8"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-gray-400 mb-1 hover:text-[#7ed957] transition"
    aria-label="Ubicación"
  >
    {/* Icono centrado sobre la dirección */}
    <MapPin className="h-6 w-6 mb-1" />

    <span className="text-center">
      Leandro N. Alem 4510, esquina Pueyrredón<br/>
      José C. Paz
    </span>
  </a>
</div>


          {/* Redes Sociales */}
          <div className="flex flex-col items-center justify-center max-w-xs mx-auto">
            <h3 className="text-xl font-bold mb-3">Seguinos</h3>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=61573446546602"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7ed957] transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={30} color="white" />
              </a>
              <a
                href="https://www.instagram.com/centroculturaldeoficios"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7ed957] transition"
                aria-label="Instagram"
              >
                <FaInstagram size={30} color="white" />
              </a>
              <a
                href="https://wa.me/5491149728753"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7ed957] transition"
                aria-label="Whatsapp"
              >
                <FaWhatsapp size={30} color="white" />
              </a>
              <a
                href="https://www.tiktok.com/@centro.cultural.doficios"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7ed957] transition"
                aria-label="Tiktok"
              >
                <FaTiktok size={30} color="white" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Centro Cultural y de Oficios. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
