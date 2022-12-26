import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';

import { FilmDetails } from './FilmDetails';
import { Loader } from '../../components/loader/Loader';
import { addMovies } from '../../redux/movies/movieSlice';

export const MovieInfoPage = () => {
  const movie = useLoaderData();

  return (
    <div className="container">
      {movie ? <FilmDetails movie={movie} /> : <Loader />}
    </div>
  );
};
