import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({ addMovie, movieList, page, setPage, watchList, removeMovie }) {

  const decrement = () => 
    setPage(page - 1);

const increment = () =>
  setPage(page + 1);

  const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard addMovie={addMovie} movie={movie} watchList={watchList} removeMovie={removeMovie} />;
  });

  

  return (
    <div className="page">
      <div>
        <h1>Leahs Movie Theatre</h1>
        
        <h3>Add a movie to your watchlist</h3>
        <div className="btn-container">
          <button onClick={page !== 1 && decrement}>Previous</button>
          <button onClick={increment}>Next</button>
        </div>
        <div className="movie-container">{movieDisplay}</div>
      </div>
    </div>
  );
}

export default MovieScreen;
