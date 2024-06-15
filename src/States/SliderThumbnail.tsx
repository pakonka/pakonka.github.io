import { useState, useEffect } from "react";
import { image2s } from "./StandardSlider";

const SliderThumbmail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((currentIndex + 1) % image2s.length),
      2000
    );
    return () => {
      clearInterval(interval);
    };
  });
  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className=" image-slider w-[1140px] h-[760px] justify-center mx-[180px] relative text-center mt-[100px]">
      <h1 className="text-[20pt]">STANDARD SLIDER</h1>
      <p>
        Image slider gallery with all controls. Initialize with
        'slider-all-controls' class
      </p>
      <div className="mt-5 image-container ">
        <div className="relative flex items-center justify-center w-full h-[400px] overflow-hidden">
          <div className=" overflow-hidden">
            {image2s.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0  transition-transform duration-500 ${
                  index === currentIndex
                    ? "translate-x-0"
                    : index === (currentIndex + 1) % image2s.length
                    ? "translate-x-full"
                    : "-translate-x-full"
                }`}
              >
                <img src={image} className=" object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-4 justify-center ">
        {image2s.map((_, index) => (
          <img
            src={image2s[index]}
            key={index}
            className={`text-2xl cursor-pointer ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            } opacity-50 hover:opacity-100`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default SliderThumbmail;
