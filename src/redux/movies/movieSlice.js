import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  popularMovies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload.movies;
    },
  },
});

const popularMovieSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload.movies;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const { addPopularMovies } = popularMovieSlice.actions;

export const moviesReducer = movieSlice.reducer;
export const popularMoviesReducer = popularMovieSlice.reducer;
