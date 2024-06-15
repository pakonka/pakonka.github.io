import { contents } from "./Accordions";
import { useState } from "react";

const Accordions = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const reset = ({ index }: { index: number }) => setSelected(index);
  return (
    <div className="my-[100px]">
      <h1 className="text-center text-[18pt] my-5">BUTTON ACCORDIONS</h1>
      <p className="my-5 mx-5 text-[15pt] text-[#7a7979]">ONE AT A TIME</p>
      {contents.map((content, index) => {
        return (
          <div key={index} className="w-[555px] text-left px-5 ">
            <button
              onClick={() => reset({ index })}
              className={
                selected === index
                  ? `bg-[#2ac570] text-[#fff] py-3 w-[555px] text-left px-5`
                  : ` py-3 bg-[#f6f6f6] w-[555px] text-left px-5 `
              }
            >
              {content.title}
            </button>
            {selected !== null && selected === index && (
              <p className="my-3 px-2 ">{contents[selected].parag}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Accordions;
