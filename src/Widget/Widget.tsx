import {
  FaLinkedinIn,
  FaDribbble,
  FaCodepen,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDevdotto } from "react-icons/si";
import { BsCamera } from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineOutlinedFlag } from "react-icons/md";

import { ReactNode, useState } from "react";

const Widget = () => {
  const [light, setLight] = useState(false);
  const change = () => {
    setLight(!light);
  };
  return (
    <div className="pt-16 pb-16 mx-5">
      <a
        className="block fixed top-8 right-8 z-50"
        href="https://buymeacoffee.com/frankuxui"
      >
        <img
          className="max-w-[10rem]"
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy me a coffee"
        />
      </a>
      <div className="flex justify-center m-auto">
        <button
          onClick={change}
          className={
            light
              ? `w-[60px] h-[60px] rounded-full text-[20pt] dark:bg-slate-300`
              : `w-[60px] h-[60px] rounded-full text-[20pt] dark:bg-slate-500`
          }
        >
          {light ? `🌙` : `🌞`}
        </button>
      </div>
      <Title />
      <Main />
    </div>
  );
};
export default Widget;

const Title = () => {
  return (
    <div className="justify-center flex-col m-auto mb-16 text-center text-lg">
      <p className="font-bold">
        Built by <a href="https://allmylinks.com/frankuxui">Frank Esteban</a>
      </p>
      <p>Contact me on the different platforms and social networks</p>
      <div className="flex-wrap flex items-center justify-center mt-2 gap-3">
        <a
          href="https://www.linkedin.com/in/frankuxui/"
          className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700"
        >
          <FaLinkedinIn size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/frankuxui/"
          className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700"
        >
          <IoLogoFigma size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/frankuxui/"
          className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700"
        >
          <FaDribbble size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/frankuxui/"
          className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700"
        >
          <AiOutlineCodeSandbox size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/frankuxui/"
          className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700"
        >
          <FaCodepen size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/frankuxui/"
          className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700"
        >
          <RiTailwindCssFill size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/frankuxui/"
          className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/frankuxui/"
          className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700"
        >
          <FaInstagram size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/frankuxui/"
          className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700"
        >
          <SiDevdotto size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/frankuxui/"
          className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700"
        >
          <FaTwitter size={25} />
        </a>
      </div>
    </div>
  );
};
type Type = {
  avatar: string;
  name: string;
  job?: string;
  filter: string;
  icon?: ReactNode;
};
const Prof = ({ avatar, name, job, filter, icon }: Type) => {
  return (
    <div className="break-inside flex items-center justify-between bg-white rounded-xl p-4 mb-4 text-sm dark:bg-slate-800 dark:text-slate-50">
      <div className="flex items-center space-x-4">
        <img src={avatar} alt="" className={filter} />
        <div className="flex-auto">
          <a href="#" className="text-base font-bold block">
            {name}
          </a>
          <span className="text-sm text-slate-600 dark:text-slate-300">
            {job}
          </span>
        </div>
      </div>
      <a className="inline-block">{icon}</a>
    </div>
  );
};

const Main = () => {
  return (
    <div className="box-border m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 3xl:columns-6">
      <div className="flex flex-col">
        <Prof
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
          name="Yolanda"
          job="Web Development"
          filter="`flex-none w-12 h-12 rounded-full object-cover dark:border-slate-700`"
          icon={<BsCamera size={28} />}
        />
        <Prof
          avatar="https://randomuser.me/api/portraits/women/81.jpg"
          name="Marina Flick"
          job="Web Development"
          filter="`flex-none w-12 h-12 rounded-full object-cover dark:border-slate-700`"
          icon={
            <button className="inline-block rounded-full px-3 py-1 transition-all bg-slate-100 hover:bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-500 text-2xl">
              +
            </button>
          }
        />
        <Prof
          avatar="https://randomuser.me/api/portraits/women/80.jpg"
          name="Jenny Wilson"
          job="Web Development"
          filter="`flex-none w-12 h-12 rounded-full object-cover ring-2 ring-pink-500 border-2 border-white dark:border-slate-700`"
        />
      </div>
      <Dance />
      <div className="break-inside justify-between flex-col rounded-xl px-4 pt-4 bg-white dark:bg-slate-800 dark:text-slate-50">
        <div className="flex justify-between items-start">
          <h5 className="font-medium text-base">
            New task completed successfully
          </h5>
          <button className="inline-block transition-all rounded-full p-1 hover:bg-slate-100 dark:hover:bg-slate-600">
            <FaChevronDown />
          </button>
        </div>
        <Prof
          avatar="https://randomuser.me/api/portraits/women/60.jpg"
          name="Lucianna"
          filter="`flex-none w-12 rounded-full object-cover dark:border-slate-700`"
          icon={
            <div className="flex items-center space-x-2 text-gray-600 dark:text-slate-400">
              <CiClock1 size={20} />
              <span className="font-medium">3 min</span>
            </div>
          }
        />
      </div>
      <div className="break-inside flex justify-between flex-col rounded-xl p-4 mb-2 space-y-3 bg-white dark:bg-slate-800 dark:text-white">
        <Flag />
        <Prof
          avatar="https://randomuser.me/api/portraits/women/46.jpg"
          name="Veronica"
          filter="`flex-none w-12 rounded-full object-cover dark:border-slate-700 pt-0`"
          icon={
            <div className="flex items-center space-x-2 text-gray-600 dark:text-slate-400">
              <span className="font-bold">34.5 K</span>
            </div>
          }
        />
      </div>
    </div>
  );
};

const Flag = () => {
  return (
    <>
      <div className="flex justify-between items-start space-x-3">
        <MdOutlineOutlinedFlag size={30} />
        <h5 className="font-medium text-base">
          Improve large organization onboarding
        </h5>
      </div>
      <div className="relative w-full h-2 bg-slate-100 rounded-md overflow-hidden">
        <div className="absolute left-0 w-1/3 h-full bg-[#D903EC]"></div>
      </div>
    </>
  );
};

const Flagchild = () => {
  return <></>;
};

const Dance = () => {
  return (
    <div>
      <a
        href="#"
        className="break-inside overflow-hidden flex bg-[#A649EE] rounded-2xl mb-3"
      >
        <div className="flex-1 items-center relative">
          <div className="absolute -right-1 -top-4">
            <img
              className="flex-none w-28 h-28 rounded-2xl object-cover rotate-12"
              src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
              alt="avatar"
            />
          </div>
          <div className="mr-auto px-8 py-4">
            <h5 className="font-medium text-lg text-white">Dance</h5>
            <h3 className="font-bold text-xl text-white">Electrónic</h3>
          </div>
        </div>
      </a>
    </div>
  );
};
