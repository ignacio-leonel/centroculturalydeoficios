import React from 'react';

export interface Evento {
  id: number;
  title: string;
  image: string;
  images: string[];
  description?: string;
  duration: string;
  schedule: string;
  cost: string;
}

export const eventosData: Evento[] = [
  {
    id: 1,
    title: "Fiesta Nacional de la Empanada",
    duration: "1 día",
    schedule: "Sábado 10 de agosto",
    cost: "Entrada libre y gratuita",
    image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
    images: [
      "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
      "https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg"
    ],
    description: "Vení a disfrutar de las mejores empanadas del país, música en vivo y feria de artesanos."
  },
  // ...agregá más eventos acá
];

export const SeccionEventos: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Eventos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventosData.map((evento) => (
          <article key={evento.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <img
              src={evento.image}
              alt={evento.title}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="text-xl font-semibold">{evento.title}</h3>
            <p><strong>Duración:</strong> {evento.duration}</p>
            <p><strong>Fecha:</strong> {evento.schedule}</p>
            <p><strong>Costo:</strong> {evento.cost}</p>
            {evento.description && <p className="mt-2 text-gray-700">{evento.description}</p>}
          </article>
        ))}
      </div>
    </section>
  );
};

export default SeccionEventos;
