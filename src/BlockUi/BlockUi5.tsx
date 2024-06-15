import { FaRegCalendarAlt, FaHeart, FaPhone } from "react-icons/fa";
import { BsFillMortarboardFill } from "react-icons/bs";
import { MdPlace, MdOutlineMailOutline } from "react-icons/md";
import { ReactNode } from "react";

type Type1 = {
  src: string;
  name5: string;
  job: string;
};
type Type2 = {
  icon5: ReactNode;
  label5: string;
  note5: string;
};
type Type3 = {
  emailBg: string;
  phoneBg: string;
  email: string;
  phone: string;
};
const Image = ({ src, name5, job }: Type1) => {
  return (
    <div className="mb-1">
      <img src={`${src}`} alt="" className="w-[150px] h-[150px] " />
      <div className={`text-center`}>
        <p className={`text-[#6b6b6b] m-1`}>{name5}</p>
        <p className={`text-[#979595] mb-2`}>{job}</p>
      </div>
    </div>
  );
};
const Infor = ({ icon5, label5, note5 }: Type2) => {
  return (
    <div
      className={`border-dotted border-b-[#ccc] border-b-[1px] grid grid-flow-col auto-cols-max my-2 mx-1`}
    >
      <span className="text-[#727171  w-[20px]">{icon5}</span>
      <span className="text-[#727171] w-[50px]">{label5}</span>
      <p className=" text-[#adaaaa] w-[70px] flex-1 text-right">{note5}</p>
    </div>
  );
};
const Profile = () => {
  return (
    <div>
      <Infor icon5={<FaRegCalendarAlt />} label5="DOB" note5="23/05/2014" />
      <Infor icon5={<FaHeart />} label5="BG" note5="B+" />
      <Infor icon5={<BsFillMortarboardFill />} label5="EDU" note5="MCA" />
      <Infor icon5={<MdPlace />} label5="RES" note5="Bangalalore" />
    </div>
  );
};
const Box = ({ emailBg, phoneBg, phone, email }: Type3) => {
  return (
    <div>
      <div className={`${emailBg} h-16 p-2  text-[#fff] shadow-md my-3`}>
        <div className="m-[5px]">EMAIL ID</div>
        <div>
          <div className="flex">
            <MdOutlineMailOutline className="w-[30px] mt-1" />
            <span>{email}12@gmail.com</span>
          </div>
        </div>
      </div>
      <div className={`${phoneBg} h-16 p-2 text-[#fff] shadow-md my-3`}>
        <div className="m-[5px]">PHONE NO</div>
        <div>
          <div className="flex">
            <FaPhone className="w-[30px]" />
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const BlockUi5 = () => {
  return (
    <div className="grid grid-cols-4 gap-4 m-3">
      <div className="w-[170px] text-xs py-4  px-2 shadow-[0_0_15px_-1px_rgba(0,0,0,0.6)]">
        <Image
          src="https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpc2h8ZW58MHx8MHx8fDA%3D"
          name5="ROBORT PATTISON"
          job="Developing"
        />

        <Profile />
        <Box
          emailBg="bg-[#dd3636]"
          phoneBg="bg-[#49ba37]"
          email="roboxt"
          phone="08665543219"
        />
      </div>
      <div className="w-[170px] text-xs py-4  px-2 shadow-[0_0_15px_-1px_rgba(0,0,0,0.6)]">
        <Image
          src="https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D"
          name5="JAMES SMITH"
          job="Designer"
        />

        <Profile />
        <Box
          emailBg="bg-[#51d6ed]"
          phoneBg="bg-[#4177da]"
          email="smith"
          phone="8225543219"
        />
      </div>
      <div className="w-[170px] text-xs py-4  px-2 shadow-[0_0_15px_-1px_rgba(0,0,0,0.6)]">
        <Image
          src="https://images.unsplash.com/photo-1513040260736-63dd0617fb66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZpc2h8ZW58MHx8MHx8fDA%3D"
          name5="TOM HANKS"
          job="UI Designer"
        />

        <Profile />
        <Box
          emailBg="bg-[#cd732a]"
          phoneBg="bg-[#f8e72b]"
          email="peter"
          phone="873695916516"
        />
      </div>
      <div className="w-[170px] text-xs py-4  px-2 shadow-[0_0_15px_-1px_rgba(0,0,0,0.6)]">
        <Image
          src="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D"
          name5="SLIVESTER STALIN"
          job="Testing"
        />

        <Profile />
        <Box
          emailBg="bg-[#d046d2]"
          phoneBg="bg-[#ee32dc]"
          email="point"
          phone="74682283615"
        />
      </div>
    </div>
  );
};
export default BlockUi5;
