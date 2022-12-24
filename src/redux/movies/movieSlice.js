import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {},
  popularMovies: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    // addPopularMovies: (state, { payload }) => {
    //   state.popularMovies = payload;
    // },
  },
});

export const { addMovies, addPopularMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getPopularMovies = (state) => state.popularMovies.movies;
export default movieSlice.reducer;
