import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  tagTypes: ['Movies'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://yts.mx/api/v2/list_movies.json' }),
  endpoints: (build) => ({
    getMovies: build.query({
      query: (page = '') => `movies?${page && `page=${page}`}`,
    }),
    getMoviesByGenre: build.query({
      query: (genre) => `movies?genre=${genre}`,
    }),
  })
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
