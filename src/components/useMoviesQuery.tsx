import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "bbf4abc4e3112c3a8b28301c1ad039ee";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8";

type PageData = {
  page: number;
};
const useMoviesQuery = (pageData: PageData) => {
  return useQuery({
    queryKey: ["movies", pageData.page],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: API_KEY,
              language: "en-US",
              page: pageData.page,
            },
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error data:", error);
        throw error;
      }
    },
  });
};

export default useMoviesQuery;
