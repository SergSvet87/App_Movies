import React from 'react';
import axios from 'axios';

import { ALL_FILMS_URL } from '../../const';
import { Films } from './main/films/Films';
import { Loader } from '../../components/loader/Loader';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { addMovies } from '../../components/redux/movies/movieSlice';

const HomePage = () => {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  //   state = {
  //     isLoading: true,
  //     movies: [],
  //   };

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(ALL_FILMS_URL);
    // this.setState({ movies, isLoading: false });
    setMovies({ movies });
    dispatch(addMovies(movies));
    setIsLoading(false);
  };

  //   componentDidMount() {
  //     this.getMovies();
  //   }

  useEffect(() => {
    getMovies();
  }, []);

  //   onSubmitHandler = (e) => {
  // e.preventDefault();
  // setTextSearch('')
  //   };

  //   render() {
  // const { isLoading, movies } = this.state;

  return (
    <div className="container">
      {isLoading ? <Loader /> : <Films movies={movies.movies} />}
    </div>
  );
  //   }
};

export default HomePage;
