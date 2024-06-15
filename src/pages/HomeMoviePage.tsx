import { MdOutlinePlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";

// import { datas } from "./MoviesPopular";

import { MovieSlider } from "../components/movieslider";
export const HomeMoviePage = () => {
  return (
    <div className="bg-[#1e1e2a] text-[#fcfeff] mt-[100px]">
      <section className="flex relative items-center  ">
        <img
          className="rounded-[8px]"
          src="https://movie-site-delta.vercel.app/img/home-background.png"
          alt="Main Image"
        />
        <div className="pl-[40px] absolute w-[288px]">
          <p className="text-[32px] font-bold">
            <span>Hitman's </span> Wife's Bodyguard
          </p>
          <p className="text-[#ffb43a] text-[15px] my-[10px]">
            Releasing 23 july
          </p>
          <div className="items-center flex gap-5">
            <span className="bg-[#f8a92a] items-center rounded-full my-2 hover:bg-[#e99e26]">
              <MdOutlinePlayArrow className="m-1" size={30} />
            </span>
            <span>Watch the trailler</span>
          </div>
        </div>
      </section>
      <section className="my-[32px] ">
        <Link
          to="/popular"
          className="items-center font-semibold bg-[#2d2e37] border-[#fafdff0d] border-[1px] flex justify-between py-[8px] px-[14px] my-5 text-[20px] cursor-pointer "
        >
          Popular Movies
        </Link>
        <MovieSlider page={1} />
        <div className="items-center font-semibold bg-[#2d2e37] border-[#fafdff0d] border-[1px] flex justify-between py-[8px] px-[14px] my-5 text-[20px] ">
          Movies and Shows
        </div>
        <MovieSlider page={2} />
        <MovieSlider page={3} />
      </section>
      <div className="flex justify-center">
        <a href="">
          <button className="rounded-[5px] px-4 py-3 bg-[#f8a92a] font-semibold text-center items-center hover:scale-110 hover:bg-[#e99e26] transition duration-500 ">
            Next Page
          </button>
        </a>
      </div>
    </div>
  );
};
