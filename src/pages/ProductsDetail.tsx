import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

export const ProductsDetail = () => {
  const params = useParams();
  const id = params.id;
  console.log(params);
  // tao ham de goi
  const getDetailsProducts = async () => {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/categories/${id}`
    );
    console.log(res.data);
    return res.data;
  };
  // su dung useQuery de goi
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", id],
    queryFn: getDetailsProducts,
  });

  return (
    <div>
      <div>ProductsDetail ID:{id}</div>

      {isError && error ? <p> {error.message} </p> : null}
      {!isLoading && (
        <>
          <h2>{data.id}</h2>
          <h2>{data.name || <Skeleton />}</h2>

          <img src={data.image} alt="" />
        </>
      )}
    </div>
  );
};
