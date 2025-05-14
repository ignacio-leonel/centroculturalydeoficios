import React from 'react';
import { MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Centro Cultural y de Oficios</h3>
            <div className="flex items-center text-gray-400">
              <MapPin className="h-5 w-5 mr-2" />
              <p>Leandro N. Alem 4510, esquina Pueyrredón, José C. Paz</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Seguinos</h3>
            <div className="flex justify-center items-center space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* TikTok (SVG custom) */}
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8v7.5a2.25 2.25 0 1 0 4.5 0v-11a4.5 4.5 0 0 0 4.5 4.5"
                  />
                </svg>
              </a>

              {/* WhatsApp (SVG matching style) */}
              <a
                href="https://wa.me/541156417859"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12c-.5.5-1.5 1.5-2.5 0s-2-2-3-1 0 2 1 3 3 1.5 4 .5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Centro Cultural y de Oficios. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
