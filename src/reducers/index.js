import {
  GET_MOVIES,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  GET_MOVIE_DETAIL,
  CLEAR_MOVIE_DETAIL,
} from "../actions/types";

function getLocalData() {
  let moviesFav = window.localStorage.getItem("moviesFav");
  if (moviesFav) moviesFav = JSON.parse(moviesFav);
  return moviesFav;
}

function setLocalData(moviesFav) {
  window.localStorage.setItem("moviesFav", JSON.stringify(moviesFav));
}

const initialState = {
  favorites: getLocalData(),
  movies: undefined,
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload.Search,
      };
    case ADD_MOVIE_FAVORITE: {
      let newState;
      if (state.favorites) {
        if (state.favorites.find((movie) => movie.id === payload.id))
          newState = state;
        else {
          newState = { ...state, favorites: [...state.favorites, payload] };
        }
      } else {
        newState = {
          ...state,
          favorites: [payload],
        };
      }
      setLocalData(newState.favorites);
      return newState;
    }
    case REMOVE_MOVIE_FAVORITE: {
      let newState;
      if (state.favorites) {
        newState = {
          ...state,
          favorites: state.favorites.filter((movie) => movie.id !== payload),
        };
      } else {
        newState = state;
      }
      setLocalData(newState.favorites);
      return newState;
    }
    case GET_MOVIE_DETAIL: {
      return {
        ...state,
        movieDetail: payload,
      };
    }
    case CLEAR_MOVIE_DETAIL: {
      return {
        ...state,
        movieDetail: undefined,
      };
    }

    default:
      return state;
  }
}
