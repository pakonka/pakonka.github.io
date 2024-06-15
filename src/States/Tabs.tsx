import { useState } from "react";
import { menus } from "./Tabs";

const Tabs = () => {
  const [bg, setBg] = useState<number | null>(null);
  const reset = ({ index }: { index: number }) => setBg(index);
  return (
    <div>
      <h1 className="text-center text-[18pt] my-5">BUTTON TABS</h1>
      <div className="flex text-center justify-center mx-[16%] text-[#737272] ">
        {menus.map((menu, index) => (
          <button
            key={index}
            onClick={() => reset({ index })}
            className={
              bg === index
                ? `bg-[#2ac570] text-[#fff] px-8 py-3 `
                : ` px-8 py-3 bg-[#e6e6e6]  `
            }
          >
            {menu.menubar}
          </button>
        ))}
      </div>
      {bg !== null && (
        <p className="text-center mx-[250px] my-8">{menus[bg].title}</p>
      )}
    </div>
  );
};
export default Tabs;
