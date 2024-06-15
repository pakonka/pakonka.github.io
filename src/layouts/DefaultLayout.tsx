import { IoFishOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { useCount } from "../Stores/useProductStore";
import { useAuth } from "../Stores/useAuth";
export const DefaultLayout = () => {
  const { count } = useCount();
  const { user } = useAuth();
  return (
    <div className="">
      <header>
        <ul className="font-bold flex gap-x-6 h-[70px] bg-[rgb(26,176,190)] text-[rgb(255,255,255)] py-3 items-center pl-5">
          <IoFishOutline size={60} />

          <li>
            <Link to="/">Home Page</Link>
          </li>
          <IoFishOutline size={60} />

          <li>
            <Link to="/products">Products Page</Link>
          </li>
          <IoFishOutline size={60} />

          <li>
            <Link to="/blog">Blog Page</Link>
          </li>
          <IoFishOutline size={60} />
          <li>{count}</li>
          {user !== null && <strong>{user?.name}</strong>}
          <Link to="/login">Login Page</Link>
        </ul>
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer className=" bg-[#ccc] flex justify-between   ">
        <IoFishOutline size={50} />
        <IoFishOutline size={50} />
        <IoFishOutline size={50} />
      </footer>
    </div>
  );
};
