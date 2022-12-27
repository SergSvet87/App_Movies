import { configureStore } from '@reduxjs/toolkit';
import { popularMoviesReducer } from './movies/movieSlice';
import { moviesApi } from './movies/movieSlice';

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware)
});
