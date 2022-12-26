import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  movies: [],
  popularMovies: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload.data.movies;
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

export const { addData } = dataSlice.actions;
export const { addMovies } = movieSlice.actions;
export const { addPopularMovies } = popularMovieSlice.actions;

export const dataReducer = dataSlice.reducer;
export const moviesReducer = movieSlice.reducer;
export const popularMoviesReducer = popularMovieSlice.reducer;
