type Type = {
  background: string;
  label: string;
  percent: number;
};
const Tailwind = ({ background, label, percent }: Type) => {
  return (
    <div className="flex my-3">
      <div
        // style={{ backgroundColor: `${background}` }}
        className={`w-[100px] bg-${background}-600 text-white flex justify-end py-1 px-2`}
      >
        {label}
      </div>
      <div className="bg-slate-100 w-[500px]">
        <div
          style={{ width: `${percent}%` }}
          className={`bg-${background}-500 text-white py-1 px-2 w-[${percent}%]`}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};
export default Tailwind;
