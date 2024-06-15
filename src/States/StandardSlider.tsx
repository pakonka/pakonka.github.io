import { useState, useEffect } from "react";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import React from "react";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider w-[1140px] h-[760px] justify-center mx-[180px] relative text-center">
      <h1 className="text-[20pt]">STANDARD SLIDER</h1>
      <p>
        Image slider gallery with all controls. Initialize with
        'slider-all-controls' class
      </p>
      <div className="mt-5 image-container overflow-hidden transition-transform duration-500">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className=" object-cover"
        />
      </div>
      <div className="controls flex justify-between items-center">
        <MdOutlineArrowBackIosNew
          className="text-[#fff] absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer"
          onClick={handlePrevClick}
          size={30}
        />
        <MdArrowForwardIos
          className="text-[#fff] absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer"
          onClick={handleNextClick}
          size={30}
        />
      </div>
      <div className="dots absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot mx-2 text-2xl cursor-pointer ${
              index === currentIndex ? "text-[#969696]" : "text-[#fff]"
            }`}
            onClick={() => handleDotClick(index)}
          >
            &bull;
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
