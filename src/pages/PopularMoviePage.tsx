import useMoviesQuery from "../components/useMoviesQuery";
import { Skeleton } from "../../@/components/ui/skeleton";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import { MdOutlinePlayArrow } from "react-icons/md";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../@/components/ui/pagination";
import { useState } from "react";

interface MovieData {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
}

export const PopularMoviePage = () => {
  const [page, setPage] = useState(1);
  console.log(page);

  const { data, error, isLoading } = useMoviesQuery({ page });

  if (error) {
    console.error("Error", error);
  }

  if (isLoading) {
    console.log("Is Loading");
    return (
      <div>
        <div className="items-center font-semibold bg-[#2d2e37] border-[#fafdff0d] border-[1px] flex justify-between py-[8px] px-[14px] my-5 text-[20px] mt-[100px] ">
          Popular Movies
        </div>
        <div className="h-[500px] flex justify-center items-center ">
          <Spin
            className="text-[#fff]"
            indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
          />
        </div>
      </div>
    );
  }

  if (!data || !data.results) {
    console.log("No Data");
  }

  const movies = data?.results || [];

  const handleNextClick = () => {
    setPage((page % movies.length) + 1 || 1);
  };

  const handlePrevClick = () => {
    setPage((page - 1 + movies.length) % movies.length || 1);
  };

  const handlePageClick = (index: number) => {
    setPage(index + 1);
  };
  return (
    <div>
      <div className="items-center font-semibold bg-[#2d2e37] border-[#fafdff0d] border-[1px] flex justify-between py-[8px] px-[14px] my-5 text-[20px] mt-[100px] ">
        Popular Movies
      </div>
      <Skeleton className="px-8 grid grid-cols-4 gap-5 ">
        {movies.map((movie: MovieData) => (
          <Skeleton>
            <Skeleton className="hover:scale-105 transition duration-500  object-cover my-[14px] relative h-[330px] w-[220px]">
              <img
                className="object-cover absolute h-[330px] w-[220px] "
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`}
                alt=""
              />
              <Skeleton className="w-[200px] absolute flex justify-between bottom-0 mx-2">
                <Skeleton>
                  <p className="text-[20px] font-bold">
                    {movie.original_title}
                  </p>
                  <p className="text-[15px] my-[5px]">action</p>
                </Skeleton>
                <Skeleton className="bg-[#f8a92a] absolute flex rounded-full h-[40px] items-end  hover:bg-[#e99e26] right-0 bottom-3 ">
                  <MdOutlinePlayArrow className="m-1" size={30} />
                </Skeleton>
              </Skeleton>
            </Skeleton>
          </Skeleton>
        ))}
      </Skeleton>
      <Pagination className="py-10">
        <PaginationContent className="gap-x-3 flex">
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevClick}
              className="flex hover:bg-[#e99e26] cursor-pointer rounded-none  "
            />
          </PaginationItem>

          {/* Hiển thị các trang trước trang hiện tại */}
          {page > 1 && (
            <>
              <PaginationItem
                onClick={() => handlePageClick(0)}
                className={`hover:bg-gray-200 hover:text-[#000] cursor-pointer ${
                  page === 1 ? "border-2 border-white" : ""
                }`}
              >
                <PaginationLink className="mx-3">1</PaginationLink>
              </PaginationItem>
              {page > 2 && (
                <PaginationItem className="hover:bg-gray-200 ">
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {page > 2 && (
                <PaginationItem
                  onClick={() => handlePageClick(page - 2)}
                  className={`hover:bg-gray-200 hover:text-[#000] cursor-pointer ${
                    page === page - 1 ? "border-2 border-white" : ""
                  }`}
                >
                  <PaginationLink className="mx-3">{page - 1}</PaginationLink>
                </PaginationItem>
              )}
            </>
          )}

          {/* Hiển thị trang hiện tại */}
          <PaginationItem
            className={`active hover:bg-gray-200 hover:text-[#000] cursor-pointer ${
              page === page ? "border-2 border-white" : ""
            }`}
          >
            <PaginationLink className="mx-3">{page}</PaginationLink>
          </PaginationItem>

          {/* Hiển thị các trang tiếp theo */}
          {page < movies.length && (
            <>
              <PaginationItem
                onClick={() => handlePageClick(page)}
                className={`hover:bg-gray-200 hover:text-[#000] cursor-pointer ${
                  page === page + 1 ? "border-2 border-white" : ""
                }`}
              >
                <PaginationLink className="mx-3">{page + 1}</PaginationLink>
              </PaginationItem>
              {page < movies.length - 1 && (
                <PaginationItem
                  onClick={() => handlePageClick(page + 1)}
                  className={`hover:bg-gray-200 hover:text-[#000] cursor-pointer ${
                    page === page + 2 ? "border-2 border-white" : ""
                  }`}
                >
                  <PaginationLink className="mx-3">{page + 2}</PaginationLink>
                </PaginationItem>
              )}
              {page < movies.length - 1 && (
                <PaginationItem className="hover:bg-gray-200 cursor-pointer hover:text-[#000]">
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {page < movies.length - 1 && (
                <PaginationItem
                  onClick={() => handlePageClick(movies.length - 1)}
                  className={`hover:bg-gray-200 cursor-pointer hover:text-[#000] ${
                    page === movies.length ? "border-2 border-white" : ""
                  }`}
                >
                  <PaginationLink className="mx-3">
                    {movies.length}
                  </PaginationLink>
                </PaginationItem>
              )}
            </>
          )}

          <PaginationItem>
            <PaginationNext
              onClick={handleNextClick}
              className="p-2 flex hover:bg-[#e99e26] cursor-pointer rounded-none  "
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
