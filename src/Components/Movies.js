import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
const Movies = ({ handleWatchList, handelRemoveFromWatchList, watchList }) => {
  const [movies, setMovies] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  // const [isLoading , setIsLoading] = useState(false)
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=eb6714577565a8cd41bfe067d58c7981&language=en-Us&page=${pageNumber}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNumber]);
  console.log("pageNumber", pageNumber);

  return (
    <div className="p-5 m-5">
      <div className="text-2xl font-bold text-center mb-10">
        {" "}
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-between items-end">
        {movies?.map((movie, index) => (
          <MovieCard
            key={movie?.id || index}
            poster_path={movie?.poster_path}
            original_title={movie?.original_title}
            handleWatchList={handleWatchList}
            movieObj={movie}
            handelRemoveFromWatchList={handelRemoveFromWatchList}
            watchList={watchList}
          />
        ))}
      </div>
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
};

export default Movies;
