import { useSearchParams } from "react-router-dom";
export const useQueryString = () => {
  const [searchParams] = useSearchParams();
  const searchParamsOject = Object.fromEntries([...searchParams]);
  return searchParamsOject;
};
