import React from 'react';
import axios from 'axios';

import { INFO_FILM_URL } from '../../const';
// import { Film } from './sidebar/Film';
import { FilmDetails } from '../movie-info/FilmDetails';
import { Loader } from '../../components/loader/Loader';

// import styles from './sidebar/Sidebar.module.scss';

// const dispatch = useDispatch();
class HomePage1 extends React.Component {
  state = {
    isLoading: true,
    movie: {},
  };

  getMovie = async () => {
    const {
      data: { data },
    } = await axios.get(INFO_FILM_URL);
    this.setState({ data, isLoading: false });
  };

  componentDidMount() {
    this.getMovie();
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    // setTextSearch('')
  };

  render() {
    const { isLoading, data } = this.state;

    return (
      <div className="container">
        {isLoading ? <Loader /> : <FilmDetails movie={data.movie} />}
      </div>
    );
  }
}

export default HomePage1;
