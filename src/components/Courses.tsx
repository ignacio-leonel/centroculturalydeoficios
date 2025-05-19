import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CourseCard from './CourseCard';
import CourseModal from './CourseModal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface Course {
  id: number;
  title: string;
  duration: string;
  schedule: string;
  cost: string;
  image: string;
  images: string[];
  benefits?: string[];
  requirements?: string[];
}

const courses: Course[] = [
    {
      id: 1,
    title: "Gráfica para Eventos",
    duration: "4 clases mensuales",
    schedule: "Miércoles de 14 a 16",
    cost: "$30.000",
    image: "/images/grafica_eventos.jpeg",
    images: [
      "/images/grafica2.jpg",
      "/images/grafica3.jpg",
      "/images/grafica4.jpg"
    ],
    requirements: ["Celular o computadora apto para diseñar"]
  },
 {
    id: 2,
    title: "Pastelería",
    duration: "8 clases",
    schedule: "Martes de 9 a 13h y  14 a 17 h",
    cost: "$25.000",
    image: "/images/pasteleria.jpeg",
    images: [
        "/images/pasteleria1.jpeg",
        "/images/pasteleria2.jpeg"
    ],
    requirements: ["Delantal", "Materiales básicos de pastelería"]
  },
  {
    id: 3,
    title: "Sublimación",
    duration: "4 clases",
    schedule: "Miércoles de 16 a 17 h",
    cost: "$25.000",
    image: "/images/taller_sublimacion.jpeg",
    images: [
      "/images/subli1.jpg",
      "/images/subli2.jpg",
     
    ],
    requirements:[
      ""
    ],

  },
 
  {
    id: 4,
    title: "Introducción a la programación en Python",
    duration: "8 clases",
    schedule: "Jueves de 9 a 11 h",
    cost: "$40.000",
    image: "/images/taller_programacion.jpeg",
    images: [
    
      "/images/programacion1.jpeg"
    
    ],
    benefits: ["Proyecto final", "Certificado", "Acompañamiento personalizado"],
    requirements: ["Llevar notebook"]
  },
  {
    id: 5,
    title: "Globología",
    duration: "6 clases",
    schedule: "Lunes de 16 a 18 h",
    cost: "$25.000",
    image: "images/globologia.jpeg",
    images: [
      "images/globologia1.jpg",
      "images/globologia2.jpg",
      "images/globologia3.jpg",
      "images/globologia4.jpg",
    ]
  },

  {
    id: 8,
    title: "Macramé",
    duration: "8 clases",
    schedule: "viernes de 17 a 19 h",
    cost: "$55.000",
    image: "/images/macrame.jpeg",
    images: [
      "/images/macrame1.jpg",
      "/images/macrame2.jpg",
      "/images/macrame3.jpg",
     
    ],
    
    requirements: ["Kit de materiales incluido"]
  },
  
  /*  id: 9,
    title: "Ajedrez",
    duration: "12 clases",
    schedule: "Sábados de 14 a 16 h",
    cost: "$20.000",
    image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    images: [
      "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/5582859/pexels-photo-5582859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ]
  },
  {
    id: 10,
    title: "Reiki",
    duration: "8 clases",
    schedule: "Viernes de 10 a 12 h",
    cost: "$35.000",
    image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    images: [
      "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ]
  },
  {
    id: 11,
    title: "Seminario de Postres",
    duration: "4 clases",
    schedule: "Sábados de 9 a 13 h",
    cost: "$25.000",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    images: [
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    requirements: ["Delantal", "Materiales básicos de pastelería"]
  }*/
];

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Cursos  y talleres 2025</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nuestros cursos están pensados para que puedas aprender un oficio, emprender y desarrollar lo que te gusta. Talleres prácticos, accesibles y pensados para toda la comunidad
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard
                  course={course}
                  onClick={() => setSelectedCourse(course)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </section>
  );
};

export default Courses;