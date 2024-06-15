import { ReactNode } from "react";

type Type = {
  icon: ReactNode;
  label: string;
  number: string;
  background: string;
};
const BlockUi3 = ({ icon, label, number, background }: Type) => {
  return (
    <div
      className={`w-[150px] h-[170px] ${background} py-4 px-2 space-y-[100px] m-4 border shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.5)]`}
    >
      <div className={`float-start text-[#fff]    `}>{icon}</div>
      <div className={`mt-auto text-[#fff] mx-[10px] font-thin `}>
        <h3 className="text-lg  ">{label}</h3>
        <p className="text-xs  ">{number}</p>
      </div>
    </div>
  );
};
export default BlockUi3;
