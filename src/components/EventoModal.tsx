import React from 'react';
import { X } from 'lucide-react';
import { Evento } from './SeccionEventos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface EventoModalProps {
  evento: Evento;
  onClose: () => void;
}

const EventoModal: React.FC<EventoModalProps> = ({ evento, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 text-white hover:text-gray-200 transition-colors bg-black bg-opacity-50 rounded-full p-1"
          >
            <X className="h-6 w-6" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="h-64 md:h-80"
          >
            {evento.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${evento.title} - Imagen ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{evento.title}</h3>
          +

          {evento.description && (
            <p className="text-gray-700 text-base mb-4">{evento.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventoModal;
