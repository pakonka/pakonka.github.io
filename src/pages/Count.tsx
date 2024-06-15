import { useCount } from "../Stores/useProductStore";
export const Count = () => {
  const { setCount } = useCount();
  return (
    <button
      onClick={() => {
        setCount();
      }}
    >
      Count
    </button>
  );
};
