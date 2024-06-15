import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlinePlayArrow } from "react-icons/md";
import useMoviesQuery from "./useMoviesQuery";
import { Autoplay } from "swiper/modules";

interface MovieData {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
}
interface PageData {
  page: number;
}
export const MovieSlider = ({ page }: PageData) => {
  const { data, error, isLoading } = useMoviesQuery({ page });
  console.log({ page });

  if (error) {
    console.error("Error", error);
  }

  if (isLoading) {
    console.log("Is Loading");
  }

  if (!data || !data.results) {
    console.log("No Data");
  }

  const movies = data?.results || [];
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 3000 }}
        slidesPerView={4}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {movies.map((data: MovieData) => {
          return (
            <SwiperSlide className="my-5 z-50">
              <div className="hover:scale-105 transition duration-500 h-[380px] w-[250px] object-cover my-[14px] relative">
                <img
                  className="object-cover absolute h-[380px] w-[250px]"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.backdrop_path}`}
                  alt=""
                />
                <div className="w-[230px] absolute flex justify-between bottom-0 mx-2">
                  <div>
                    <p className="text-[20px] font-bold">
                      {data.original_title}
                    </p>
                    <p className="text-[15px] my-[5px]">action</p>
                  </div>
                  <div className="bg-[#f8a92a] absolute flex rounded-full h-[40px] items-end  hover:bg-[#e99e26] right-0 bottom-3 ">
                    <MdOutlinePlayArrow className="m-1" size={30} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
