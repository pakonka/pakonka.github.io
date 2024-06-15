import { IoCart } from "react-icons/io5";

type Type = {
  src6: string;
  label6: string;
  hiddenCost: string;
};
const BlockUi6 = ({ src6, label6, hiddenCost }: Type) => {
  return (
    <div className="text-center content-center w-[180px] text-[8pt] px-7 py-3 border-solid border-[1px] border-[#ccc]">
      <img
        src={`${src6}`}
        alt=""
        className="h-[180px] w-[180px] object-cover"
      />
      <p className="font-bold text-[6pt] my-2">{label6}</p>
      <p className="text-[#9e9e9e] mb-2 text-[6pt]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="text-[8pt]">XL/XXL/S</div>
      <div className="font-bold">
        $25 <span className="font-thin line-through">{hiddenCost}</span>
      </div>
      <button className="mx-[15%] flex text-[#fff] py-1 px-2 m-1 bg-[#47b768] text-[7pt] rounded-sm ">
        <IoCart className="w-[10px] m-[3px]" />
        <span>Add to cart</span>
      </button>
    </div>
  );
};
export default BlockUi6;
