import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularMovies: {},
};

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {
    addPopularMovies: (state, { payload }) => {
      state.popularMovies = payload;
    },
  },
});

export const { addPopularMovies } = popularMoviesSlice.actions;
export const getPopularMovies = (state) => state.popularMovies.popularMovies;
export default popularMoviesSlice.reducer;
