import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { ALL_FILMS_URL } from '../../const';
import { Film } from './Film';
import { Loader } from '../../components/loader/Loader';
import { addMovies } from '../../redux/movies/movieSlice';

export const MovieInfoPage = () => {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getMovies = async () => {
    const {
      data: { data },
    } = await axios.get(ALL_FILMS_URL);
    setMovies({ movies });
    dispatch(addMovies(data));
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      {isLoading ? <Loader /> : <Film movie={movies.movies} />}
    </div>
  );
};
