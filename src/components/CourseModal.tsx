import React from 'react';
import { X } from 'lucide-react';
import { Course } from './Courses';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CourseModalProps {
  course: Course;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
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
            {course.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${course.title} - Imagen ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{course.title}</h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-lg mb-2">
                <span className="font-semibold">Duración:</span> {course.duration}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Horario:</span> {course.schedule}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Costo:</span> {course.cost}
              </p>
            </div>
            
            {course.benefits && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Beneficios:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {course.requirements && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Requisitos:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="text-gray-700">{req}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-6 flex justify-center">
              <a
                href="#contact"
                onClick={onClose}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Inscribirme
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;