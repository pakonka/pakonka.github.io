import { AdvancedsItems } from "./Advanceds.ts";
import { FaStar, FaRegStar } from "react-icons/fa6";
import React from "react";

type Type = {
  saleTop: string;
  img: string;
  cost: string;
  sale: string;
  salePercent: string;
  label: string;
  sold: string;
};
const Item = ({ AdvancedItem }: { AdvancedItem: Type }) => {
  return (
    <>
      <div className="w-[220px] h-[500px] mx-[20px] relative">
        <button className="w-[50px] h-[28px] bg-[#e5441c] text-[#fff] font-bold text-center right-0 absolute z-10 text-sm rounded-sm ">
          -{AdvancedItem.saleTop}%
        </button>
        <div className="w-[220px] ">
          <img
            className="w-[220px] h-[220px] object-cover "
            src={AdvancedItem.img}
          />
        </div>
        <p className="border-b-[1px]  border-[#ccc] my-2 pb-3">YOUNG SHOP</p>
        <div className="my-5 flex gap-3">
          <span className="font-bold text-[#78c643]">${AdvancedItem.cost}</span>
          <span className="line-through text-[#858383] ">
            ${AdvancedItem.sale}
          </span>
          <span className="text-[#ff2525]">
            {AdvancedItem.salePercent}% off
          </span>
        </div>
        <div>
          <h1 className="text-[#3f79de] text-[11pt]">{AdvancedItem.label}</h1>
        </div>
        <div className="flex gap-1">
          <FaStar className="text-[#efb73e]" />
          <FaStar className="text-[#efb73e]" />
          <FaStar className="text-[#efb73e]" />
          <FaStar className="text-[#efb73e]" />
          <FaRegStar className="text-[#858585]" />
        </div>
        <div
          style={{ width: "220px", height: "10px" }}
          className="flex-1 my-3 bg-[#eceaea]"
        >
          <div className="bg-[#efb73e] w-[85%] h-[10px]">&nbsp;</div>
        </div>
        <p className="text-[#858383]">Sold: {AdvancedItem.sold}</p>
      </div>
    </>
  );
};
const Advanceds = () => {
  return (
    <div>
      <div className="border-b-[1px] border-[#ccc] my-2 mx-[20px]">
        <div className="flex ">
          <p className="text-[20pt] mb-[10px] mr-[30px]">Deal of the day</p>
          <button className="w-[220px] h-[28px] bg-[#e5441c] text-[#fff] font-bold text-center  rounded-sm transition-all">
            End in: 6:17:17:39
          </button>
          <p className="underline ml-[900px]">View all</p>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-1">
        {AdvancedsItems.map((AdvancedItem) => (
          <Item AdvancedItem={AdvancedItem} />
        ))}
      </div>
    </div>
  );
};
export default Advanceds;
