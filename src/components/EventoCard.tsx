import React from 'react';
import type { Evento } from './SeccionEventos'; 

interface EventoCardProps {
  evento: Evento;
  onClick: () => void;
}

const EventoCard: React.FC<EventoCardProps> = ({ evento, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-64">
        <img
          src={evento.image}
          alt={evento.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          {'quiero ver donde lo escribe puto'}
        </div>
      </div>
    </div>
  );
};

export default EventoCard;
