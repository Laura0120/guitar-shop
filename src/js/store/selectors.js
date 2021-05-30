import { createSelector } from "reselect";
import {} from "../const";
import {} from "../utils";

// CATALOG.filteor((el) => {
//   if (el.price < initialState.price.min || el.price > initialState.price.max) {
//     return false;
//   }

//   if (!initialState[el.type] || initialState[el.type] === false) {
//     return;
//   }
// });

const getActiveType = (state) =>
  state.FILTER_STATE.type.filter((type) => type === true);

const getOpenedMovie = (state) => adaptToClientMovie(state.DATA.openedMovie);

const getMoviesByGenre = createSelector(
  getAllMovies,
  getActivGenre,
  (allMovies, genre) => {
    if (genre === DEFAULT_GENRE) {
      return adaptToClient(allMovies.slice());
    }
    return adaptToClient(allMovies.filter((movie) => movie.genre === genre));
  }
);

const getMoviesSimilar = createSelector(
  getMoviesByGenre,
  getOpenedMovie,
  (movies, openedMovie) => {
    const start = getRandomInteger(0, movies.length - COUNT_SILIMAR_MOVIE);
    const moviesLikeThis = movies.filter(
      (movie) => movie.id !== openedMovie.id
    );
    return moviesLikeThis.slice(
      start,
      Math.min(moviesLikeThis.length, start + COUNT_SILIMAR_MOVIE)
    );
  }
);

const getGenreList = createSelector(getAllMovies, (allMovies) => {
  const addGenre = (genres, movie) => {
    genres.push(movie.genre);
    return genres;
  };

  const allGenre = allMovies.reduce(addGenre, [DEFAULT_GENRE]);
  const uniqueGenres = new Set(allGenre);
  const genreList = [...uniqueGenres];

  return genreList.slice(0, Math.min(genreList.length, MAX_COUNT_GENRE));
});

export {
  getAllMovies,
  getActivGenre,
  getMoviesByGenre,
  getMoviesSimilar,
  getGenreList,
};
