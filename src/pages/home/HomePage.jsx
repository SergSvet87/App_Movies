import React from 'react';
import axios from 'axios';

import { ALL_FILMS_URL } from '../../const';
import { Films } from './main/films/Films';
import { Loader } from '../../components/loader/Loader';

class HomePage extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(ALL_FILMS_URL);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    // setTextSearch('')
  };

  render() {
    const { isLoading, movies } = this.state;

    return <div className="container">{isLoading ? <Loader /> : <Films movies={movies} />}</div>;
  }
}

export default HomePage;
