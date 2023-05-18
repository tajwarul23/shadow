import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Slideshow({ images, title, text }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [nextSlide]);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-gray-100 w-full md:w-5/6 lg:w-4/5 mx-auto mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <div className="max-w-[1400px] h-[350px] md:h-[400px] w-full m-auto relative group">
            <div
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
              className="w-full h-full bg-no-repeat bg-center bg-cover duration-500"
            >
              {/* left arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <AiOutlineLeft
                  size={30}
                  onClick={prevSlide}
                ></AiOutlineLeft>
              </div>
              {/* right arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <AiOutlineRight
                  size={30}
                  onClick={nextSlide}
                ></AiOutlineRight>
              </div>
              
            </div>
          </div>
        </div>
        <div className="bg-myOrange p-8 md:w-1/2 lg:text-2xl md:text-xl sm:text-xs">
          {/* Content for the second column */}
          <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-white lg:text-xl sm:text-sm">
            {text}
          </p>
          <div className="mt-2">
            <Link className="btn btn-active" to="tel:+143-723-39078">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;