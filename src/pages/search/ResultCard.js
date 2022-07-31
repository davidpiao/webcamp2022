import React, { useContext } from "react";
// import Moment from "react-moment";
import { GlobalContext } from "./GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h1 className="title">{movie.title}</h1>
        </div>
        <button
          className="btn btn-primary"
          disabled={watchlistDisabled}
          onClick={() => addMovieToWatchlist(movie)}
        >
          워치리스트에 추가하기
        </button>

        {/* <button
          className="button"
          disabled={watchedDisabled}
          onClick={() => addMovieToWatched(movie)}
        >
          Add to Watched
        </button> */}
      </div>
    </div>
  );
};
