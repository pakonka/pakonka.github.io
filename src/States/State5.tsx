import { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa6";

const Navbar = () => {
  const [active, setAtive] = useState<number | null>(null);
  const reset = ({ index }: { index: number }) => setAtive(index);
  const menus = [
    <RiHome2Line size={23} />,
    <CiSearch size={23} />,
    <CiHeart size={23} />,
    <HiOutlineVideoCamera size={23} />,
    <IoIosSettings size={23} />,
  ];
  return (
    <div className="flex gap-8 p-2 bg-gradient-to-r from-[#7723dd] to-[#3312d6] w-[320px] h-[55px] rounded-lg">
      {menus.map((menu, index) => (
        <div
          key={index}
          onClick={() => reset({ index })}
          className={
            active === index
              ? `bg-[#fff] rounded-full text-[#000] p-2`
              : `rounded-full p-1 text-[#fff] pointer`
          }
        >
          {menu}
        </div>
      ))}
    </div>
  );
};

const Star = () => {
  const [star, setStar] = useState<number>(0);
  const resetStar = (index: number) => {
    if (index + 1 === star) {
      setStar(0);
    } else {
      setStar(index + 1);
    }
  };
  return (
    <div className="p-3 shadow-lg rounded-md w-[300px] flex gap-5">
      <img
        className="rounded-full w-[52px]"
        src="https://randomuser.me/api/portraits/women/50.jpg"
      />
      <div className="flex gap-3 pt-3">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <span
            key={index}
            className={`${index < star ? "text-[#f8d40b]" : ""}`}
            onClick={() => resetStar(index)}
          >
            {index < star ? <FaStar size={23} /> : <FaRegStar size={23} />}
          </span>
        ))}
      </div>
    </div>
  );
};

const State5 = () => {
  return (
    <>
      <Navbar />
      <br />
      <Star />
    </>
  );
};
export default State5;
