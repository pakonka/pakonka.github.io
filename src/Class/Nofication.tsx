import { useState } from "react";

const Nofication = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          console.log("ok");
          setshow(!show);
        }}
      >
        <button>Menu</button>
        {show && (
          <div className="list">
            <p>Menu 1</p>
            <p>Menu 1</p>
            <p>Menu 1</p>
            <p>Menu 1</p>
          </div>
        )}
      </div>
    </>
  );
};
export default Nofication;
