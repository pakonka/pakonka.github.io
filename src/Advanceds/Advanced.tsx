import { items } from "./AdItem.tsx";
import { FaRegHeart } from "react-icons/fa";

type TItem = {
  src: string;
  label: string;
  label1: string;
};
const Single = ({ item }: { item: TItem }) => {
  return (
    <>
      <div className="flex m-2">
        <div>
          <img
            className="w-[150px] h-[80px] object-cover rounded-md mr-10  "
            src={item.src}
          />
        </div>
        <div className="my-5">
          <h1 className="font-bold ">{item.label}</h1>
          <h1 className="text-[#8e8989] text-[10pt]">{item.label1}</h1>
        </div>
        <div className="flex-1 my-3">
          <FaRegHeart className=" float-right  " size={30} />
        </div>
      </div>
    </>
  );
};
const Advanced = () => {
  return (
    <div>
      <strong>5 Videos</strong>
      {items.map((item) => (
        <Single item={item} />
      ))}
    </div>
  );
};
export default Advanced;
