import React from 'react';
import axios from 'axios';

import { ALL_FILMS_URL } from '../../../utils/urls';
import { Films } from '../../main/films/Films';
import { Loader } from '../../ui/loader/Loader';

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

    return <div>{isLoading ? <Loader /> : <Films movies={movies} />}</div>;
  }
}

export default HomePage;
