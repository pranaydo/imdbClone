import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end "
      style={{
        backgroundImage: `url(https://cdn.s7.shopdisney.eu/is/image/ShopDisneyEMEA/33641_avengers_endgame_movie_mb?fit=constrain&cropN=0,0,1,1&fmt=jpeg&qlt=90&wid=1200)`,
      }}
    >
      <div className="text-white text-xl text-center w-full  bg-gray-900/60 p-3 ">
        Avengers Endgame
      </div>
    </div>
  );
};

export default Banner;
