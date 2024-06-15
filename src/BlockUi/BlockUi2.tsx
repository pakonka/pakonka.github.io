import { ReactNode } from "react";

type Type = {
  icon: ReactNode;
  background: string;
  label: string;
  percent: number;
};

const BlockUi2 = ({ icon, background, label, percent }: Type) => {
  return (
    <div className={`flex mx-5 my-10`}>
      <div className={`${background} w-7 mr-2 text-[#fff] p-[6px] `}>
        {icon}
      </div>
      <div className={`text-[#767575] w-[100px] border-none font-semibold`}>
        {label}
      </div>
      <div className={`bg-[#f0f0f0] w-[500px] h-[10px] my-2 `}>
        <div
          style={{ width: `${percent}%` }}
          className={`${background} w-[${percent}%] h-[10px]`}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};
export default BlockUi2;
