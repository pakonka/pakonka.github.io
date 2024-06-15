import { useState } from "react";

const Taps = () => {
  const [taps, setTaps] = useState([
    {
      id: 1,
      name: "Angular",
    },
    { id: 2, name: "Javascript" },
    {
      id: 3,
      name: "NextJs",
    },
  ]);
  return (
    <div
      onClick={() => {
        setTaps(taps.filter((tap) => tap.id !== id));
      }}
    >
      <div className="flex gap-x-2">
        {taps.map((tap) => {
          return (
            <div className="bg-[#c5ffd7] hover:bg-[#ffc5c5]" key={tap.id}>
              {tap.name}
              <span className="font-bold p-2">x</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Taps;
