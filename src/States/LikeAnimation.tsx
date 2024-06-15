import React, { useState } from "react";

const LikeAnimation: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-black w-[300px] h-[100px] content-center px-[100px]">
      <button
        className={`relative flex items-center justify-center w-20 h-14 rounded-xl transition-colors duration-300 ${
          isLiked
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-white hover:bg-gray-200"
        }`}
        onClick={handleLike}
      >
        <div
          className={`absolute w-full h-full transform transition-transform duration-500 ${
            isLiked ? "scale-100" : "scale-0"
          }`}
        />
        <svg
          className={`w-6 h-6 fill-current ${
            isLiked ? "text-white" : "text-purple-600"
          } transition-colors duration-300`}
          viewBox="0 0 24 24"
        >
          <path
            className={`transform transition-transform duration-500 ${
              isLiked ? "scale-1000 origin-center" : "scale-100 origin-center"
            }`}
            d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.68 5.146 9.551 12 15.808 6.858-6.257 12-11.128 12-15.808 0-6.792-8.875-8.306-12-2.944z"
          />
        </svg>
        <span
          className={`ml-2 text-sm font-medium ${
            isLiked ? "text-white" : "text-purple-600"
          } transition-colors duration-300`}
        >
          Like
        </span>
      </button>
    </div>
  );
};

export default LikeAnimation;
