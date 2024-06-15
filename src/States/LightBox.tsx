import { useState } from "react";
import { imageFishs } from "./StandardSlider";
import { IoMdClose } from "react-icons/io";

const LightBox = () => {
  const [active, setActive] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextClick = () => {
    if (currentIndex !== null && currentIndex < imageFishs.length - 1) {
      setActive(imageFishs[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setActive(imageFishs[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleActive = (imageFish: string) => {
    setActive(imageFish);
  };
  const handleClose = () => {
    setActive("");
  };

  return (
    <div className="text-center relative">
      <h1 className="text-[20pt]">LIGHTBOX GRID GALLERY</h1>
      <p>A simple lightbox grid with square thumbnails.</p>
      <div className="grid grid-cols-4 grid-rows-2 gap-1 content-center mx-[250px] w-[1000px] mt-10">
        {imageFishs.map((imageFish, index) => {
          return (
            <img
              className="w-[300px] h-[200px] object-cover hover:opacity-[0.9]"
              src={imageFish}
              alt={imageFish[index]}
              onClick={() => handleActive(imageFish)}
            />
          );
        })}
        {active && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="max-w-5xl max-h-5xl">
              <img
                src={active}
                alt=""
                className="w-[600px] h-[433px] object-contain"
              />
            </div>
            <div
              className="absolute bottom-[100px] right-[700px] text-white text-4xl cursor-pointer"
              onClick={handleClose}
            >
              <IoMdClose />
            </div>
            {currentIndex !== null && (
              <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                {currentIndex > 0 && (
                  <div
                    className="text-white text-4xl cursor-pointer"
                    onClick={handlePrevClick}
                  >
                    &#10094;
                  </div>
                )}
                {currentIndex < imageFishs.length - 1 && (
                  <div
                    className="text-white text-4xl cursor-pointer"
                    onClick={handleNextClick}
                  >
                    &#10095;
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LightBox;
