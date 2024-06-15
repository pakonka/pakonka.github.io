type Type = {
  background: string;
  percent: number;
  day: string;
};
type Type1 = {
  label: string;
  number: string;
};

export const Top = ({ percent, background, day }: Type) => {
  return (
    <div className={`flex flex-col my-5 mx-[30px]    `}>
      <div
        className={`border-[1px] border-solid border-gray-300 h-[100px] w-[20px] my-2 mx-2`}
      >
        <div
          style={{ height: `${percent}%` }}
          className={` ${background} w-[${percent}%] w-[18px] mt-[calc(100px-${percent}px)]`}
        >
          &nbsp;
        </div>
      </div>
      <div className={`text-[#767575]  border-none font-semibold`}>{day}</div>
    </div>
  );
};

function BlockUi4({ label, number }: Type1) {
  return (
    <div className={`shadow-2xl w-[500px] mx-[20%] content-center`}>
      <div className="text-center my-8 ">
        <h3 className="text-[#808080]">{label}'S VISITORS</h3>
        <h1 className={`text-cyan-500 text-5xl font-thin`}>{number}</h1>
      </div>
      <div className="flex   content-center border-t-2 bg-slate-100">
        <Top percent={40} background="bg-red-500" day="MON" />
        <Top percent={30} background="bg-green-500" day="TUE" />
        <Top percent={60} background="bg-yellow-500" day="WED" />
        <Top percent={70} background="bg-cyan-500" day="THU" />
        <Top percent={60} background="bg-[#f97316]" day="FRI" />
      </div>
    </div>
  );
}
export default BlockUi4;
