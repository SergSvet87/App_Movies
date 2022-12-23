import { useSelector } from 'react-redux';

import { getAllMovies } from '../../../redux/movies/movieSlice';
import { Film } from '../main/films/Film';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const popularMoviesFromRedux = useSelector(getAllMovies);

  return (
    <ul className={styles.sidebar}>
      {popularMoviesFromRedux.movies.map((movie) => (
        <li className={styles.film} key={movie.id}>
          <Film
            id={movie.id}
            year={movie.year}
            rating={movie.rating}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          />
        </li>
      ))}
    </ul>
  );
};
