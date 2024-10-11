// import { HeartFilled } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import React from "react";

const MovieCard = ({
  poster_path,
  original_title,
  handleWatchList,
  movieObj,
  handelRemoveFromWatchList,
  watchList,
}) => {
  function doesContain(movieObj) {
    // for (let i = 0; i < watchList.length; i++) {
    //   console.log('helloa');

    //   if (watchList[i].id === movieObj.id) {
    //   console.log('helloab');

    //     return true;
    //   }
    //   console.log('helloabc');

    //     return false;

    // }
    return watchList.some((movie) => movie.id === movieObj.id);
  }
  return (
    <div className="">
      <div className=" w-full p-2 text-center bg-gray-400 rounded-xl ">
        {" "}
        {original_title.slice(0, 25)}
      </div>

      <div
        className=" mb-20 h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex-col justify-between items-end "
        style={{
          marginTop: "10px",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieObj) ? (
          <div className="m-4 flex justify-center h-8 w-8 rounded-lg bg-gray-900/60 text-white m-5 ">
            <CloseOutlined
              onClick={() => handelRemoveFromWatchList(movieObj)}
            />
          </div>
        ) : (
          <div
            className="m-4 flex justify-center h-8 w-8 rounded-lg bg-gray-900/60   "
            onClick={() => handleWatchList(movieObj)}
          >
            &#128525;
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
