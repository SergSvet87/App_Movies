import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movies/movieSlice';
import popularMovieSlice from './movies/popularMovieSlice';

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    popularMovies: popularMovieSlice,
  },
});
