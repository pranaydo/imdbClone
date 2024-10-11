import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import WatchList from "./Components/WatchList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [watchList, setWatchList] = useState([]);
  const [list, setList] = useState(false);
  let handleWatchList = (movieObj) => {
    let newmovieWathclist = [...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newmovieWathclist));
    setWatchList(newmovieWathclist);
    setList((prev) => !prev);
  };

  const handelRemoveFromWatchList = (movieObj) => {
    let filteredWatchlist = watchList.filter((movie) => {
      return movie?.id !== movieObj.id;
    });
    setWatchList(filteredWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
    setList((prev) => !prev);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, [list]);

  return (
    <>
      {/* <Navbar />    */}

      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleWatchList={handleWatchList}
                  handelRemoveFromWatchList={handelRemoveFromWatchList}
                  watchList={watchList}
                />
              </>
            }
          />
          <Route
            path="/Watchlist"
            element={
              <WatchList
                watchList={watchList}
                handelRemoveFromWatchList={handelRemoveFromWatchList}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

// https://api.themoviedb.org/3/movie/popular?api_key=eb6714577565a8cd41bfe067d58c7981&language=en-Us&page=2
export default App;
