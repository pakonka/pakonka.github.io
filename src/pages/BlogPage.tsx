import { useNavigate } from "react-router-dom";

export const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-10">
      <div>BlogPage</div>
      <button className="rounded-md p-1 m-3" onClick={() => navigate("/")}>
        Home Return
      </button>
    </div>
  );
};
