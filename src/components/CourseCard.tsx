import React from 'react';
import { Course } from './Courses';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={course.image}
          
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          
        </div>
      </div>
    </div>
  );
};

export default CourseCard;