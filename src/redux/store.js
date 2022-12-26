import { configureStore } from '@reduxjs/toolkit';
import { dataReducer, moviesReducer, popularMoviesReducer } from './movies/movieSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    movies: moviesReducer,
    popularMovies: popularMoviesReducer,
  },
});
