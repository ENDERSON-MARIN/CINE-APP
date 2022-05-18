import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  REMOVE_MOVIE_FAVORITE,
  CLEAR_MOVIE_DETAIL,
} from "./types";

//REACT_APP_OMDB_APIKEY = "1bc6c554&i";//para obtener esta API KEY deberiamos conectarnos al back, y en el back tener esta variable de entorno

//SE DECLARA LA API KEY
const API_KEY = "1bc6c554";

//SE DECLARAN LAS ACTIONS(FUNCIONES)

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export function getMovieDetail(id) {
  if (id)
    return function (dispatch) {
      return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: GET_MOVIE_DETAIL, payload: json });
        });
    };
    
  return { type: CLEAR_MOVIE_DETAIL };
}

export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function removeMovieFavorite(payload) {
  return { type: REMOVE_MOVIE_FAVORITE, payload };
}
