import { FaHeart } from "react-icons/fa";

import { useState } from "react";

const Heart = () => {
  const [heart, setHeart] = useState(0);
  const increaseHeart = () => {
    setHeart(heart + 1);
  };
  return (
    <div className="flex gap-2 text-[15pt] border-[1px] bg-[#efefef] rounded-[18px] w-[80px]">
      <span>
        <FaHeart className="text-[#d31616]" onClick={increaseHeart} size={25} />
      </span>
      <span>{heart}</span>
    </div>
  );
};
export default Heart;
