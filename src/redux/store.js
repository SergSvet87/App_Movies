import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer, popularMoviesReducer } from './movies/movieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    popularMovies: popularMoviesReducer,
  },
});
