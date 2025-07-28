import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SpecialityCarousel = ({ specialityData }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  if (!specialityData || specialityData.length === 0) return null;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + itemsPerPage) % specialityData.length
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - itemsPerPage + specialityData.length) % specialityData.length
    );
  };

  const visibleItems = [
    ...specialityData,
    ...specialityData
  ].slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex items-center gap-4">
      <button onClick={handlePrev} className="p-2 hover:bg-gray-200 rounded-full">
        <ChevronLeft />
      </button>

      <div className="flex gap-4 overflow-hidden">
        {visibleItems.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>

      <button onClick={handleNext} className="p-2 hover:bg-gray-200 rounded-full">
        <ChevronRight />
      </button>
    </div>
  );
};

export default SpecialityCarousel;
