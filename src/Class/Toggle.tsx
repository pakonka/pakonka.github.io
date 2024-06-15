import { CiPlay1, CiPause1 } from "react-icons/ci";

import { useState } from "react";

const Play = () => {
  const [play, setPlay] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setPlay(!play);
        }}
        className=""
      >
        <span>{play ? <CiPlay1 size={50} /> : <CiPause1 size={50} />}</span>
        <span>{play ? "Play" : "Pause"}</span>
      </button>
    </>
  );
};
export default Play;
