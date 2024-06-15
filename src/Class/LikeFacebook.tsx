import { AiOutlineLike } from "react-icons/ai";

import { useState } from "react";

const LikeFacebook = () => {
  const [like, setLike] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setLike(!like);
        }}
        className={like ? "text-blue-500 flex p-2 gap-1" : `flex p-2 gap-1`}
      >
        <AiOutlineLike size={20} />
        <span>Like</span>
      </button>
    </>
  );
};
export default LikeFacebook;
