import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok
} from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#00bf63] shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <img
            src="/images/logo_centro.png"
            alt="Logo del Centro"
            className="h-10 w-10 mr-2 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Centro Cultural y de Oficios
          </h1>
        </div>

        <nav className="mt-4 md:mt-0 flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-white hover:text-[#7ed957] transition cursor-pointer"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="courses"
                smooth={true}
                duration={500}
                className="text-white hover:text-[#7ed957] transition cursor-pointer"
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white hover:text-[#7ed957] transition cursor-pointer"
              >
                Inscripción
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 ml-6 text-lg">
  <a href="https://www.facebook.com/profile.php?id=61573446546602" target="_blank" rel="noopener noreferrer">
    <span className="hover:text-[#7ed957] transition">
      <FaFacebookF size={20} color="white" />
    </span>
  </a>
  <a href="https://www.instagram.com/centroculturaldeoficios?igsh=MWZ4ZHJsMjB2ZnZnZw==" target="_blank" rel="noopener noreferrer">
    <span className="hover:text-[#7ed957] transition">
      <FaInstagram size={20} color="white" />
    </span>
  </a>
  <a href="https://wa.me/5491149728753" target="_blank" rel="noopener noreferrer">
    <span className="hover:text-[#7ed957] transition">
      <FaWhatsapp size={20} color="white" />
    </span>
  </a>
  <a href="https://www.tiktok.com/@centro.cultural.doficios?_t=ZM-8wM1Bpc3Whb&_r=1" target="_blank" rel="noopener noreferrer">
    <span className="hover:text-[#7ed957] transition">
      <FaTiktok size={20} color="white" />
    </span>
  </a>
</div>


          
        </nav>
      </div>
    </header>
  );
};

export default Header;
