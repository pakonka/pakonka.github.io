import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { HiFire } from "react-icons/hi";
import { BiCompass } from "react-icons/bi";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
export const navs = [
  <Link to="/" className="flex flex-col items-center justify-center">
    <AiOutlineHome className="mx-2" size={20} />
    <span>Home</span>
  </Link>,
  <Link to="/popular" className="flex flex-col items-center justify-center">
    <HiFire className="mx-3" size={20} />
    <span>Trending</span>
  </Link>,
  <Link to="" className="flex flex-col items-center justify-center">
    <BiCompass className="mx-2" size={20} />
    <span>Explore</span>
  </Link>,
  <Link to="" className="flex flex-col items-center justify-center">
    <PiTelevisionSimple className="mx-2" size={20} />
    <span>Movies</span>
  </Link>,
  <Link to="" className="flex flex-col items-center justify-center">
    <FaRegHeart className="mx-2" size={19} />
    <span>Favorite</span>
  </Link>,
];
