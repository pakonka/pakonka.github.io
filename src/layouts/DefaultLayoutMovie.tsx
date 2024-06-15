import { Outlet } from "react-router-dom";

import { GrSearch } from "react-icons/gr";

import { navs } from "./Nav";

import { Avatar, AvatarImage } from "../../@/components/ui/avatar";
import { useState } from "react";

export const DefaultLayoutMovie = () => {
  const [currentIndex, setCurentIndex] = useState(0);
  const reset = ({ index }: { index: number }) => setCurentIndex(index);
  return (
    <div>
      <div className="fixed top-0 z-30 right-0 left-0">
        <header className="flex justify-between px-[12%] bg-[#1e1e2a] text-[#fcfeff] items-center py-[20px] mx-[3%] ">
          <div className="font-bold text-[23px]">
            MOVIE<span className="text-[#ffb43a]">VENNIE</span>
          </div>
          <div className="flex items-center">
            <div className="items-center bg-[#2d2e37] flex gap-x-[12px] rounded-[64px] py-[8px] px-[15px] h-[39px] w-[240px]">
              <input
                className="bg-[#2d2e37] w-[180px] border-none hover focus:outline-none h-[23px] placeholder-gray-500"
                type="text"
                placeholder="Search Movie"
              />
              <span className="">
                <GrSearch />
              </span>
            </div>

            <Avatar>
              <AvatarImage src="	https://movie-site-delta.vercel.app/img/user.png" />
            </Avatar>
          </div>
        </header>
      </div>
      <nav className="w-[15%] bg-[#1e1e2a] float-left fixed ">
        <div className="flex flex-col gap-y-[34px] left-0 mt-[100px] w-[90px] h-[306px] text-[12px] text-[#b7b7b7] ">
          {navs.map((nav, index) => (
            <div
              key={index}
              onClick={() => reset({ index })}
              className={
                currentIndex === index
                  ? `text-[#fcfeff]`
                  : `hover:text-[#fcfeff] hover:scale-110 transition duration-300`
              }
            >
              {nav}
            </div>
          ))}
        </div>
      </nav>
      {/* <nav className="w-[15%] bg-[#1e1e2a] text-[#fcfeff] float-right h-[900px] fixed right-0"></nav> */}
      <main className="mx-[15%] bg-[#1e1e2a] text-[#fcfeff]">
        <Outlet />
      </main>

      <footer className="bg-[#1e1e2a] py-[30px] text-center text-[#fcfeff]">
        &copy; MovieVennie All Right Reserved
      </footer>
    </div>
  );
};
