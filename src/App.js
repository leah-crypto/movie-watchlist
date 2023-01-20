// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieScreen from "./Components/MovieScreen";
import Watchlist from "./Components/Watchlist";

function App() {
  const [watchList, setWatchList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  // const movieDisplay = movieList.map();

  const addMovie = (movie) => setWatchList([...watchList, movie]);

  const removeMovie = (movie) => {
    const newState = watchList.filter((mov) => {
      return mov !== movie;
    });
    setWatchList(newState);
  };
  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          watchList={watchList}
          removeMovie={removeMovie}
        />
        <Watchlist watchList={watchList} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
