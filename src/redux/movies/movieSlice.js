import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../../const';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  tagTypes: ['Movies'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getMovies: build.query({
      query: (page = '') => `movies?${page && `&page=${page}`}`,
    }),
    getMoviesByGenre: build.query({
      query: (arg) => {
        const { genre, page } = arg;
        return {
          url: `movies?genre=${genre}&page=${page}`,
          params: { genre, page },
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetMoviesByGenreQuery } = moviesApi;

const initialState = {
  popularMovies: [],
};

const popularMovieSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload.movies;
    },
  },
});

export const { addPopularMovies } = popularMovieSlice.actions;

export const popularMoviesReducer = popularMovieSlice.reducer;
