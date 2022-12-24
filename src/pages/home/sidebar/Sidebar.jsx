import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { PATHS } from '../../../const';
import { getAllMovies } from '../../../redux/movies/movieSlice';
import { Film } from './Film';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const popularMoviesFromRedux = useSelector(getAllMovies);

  const films = popularMoviesFromRedux.movies.filter(
    (film) => film.summary !== '' && film.medium_cover_image !== '404' && film.rating !== 0
  );

  return (
    <ul className={styles.sidebar}>
      {films.map((movie) => (
        <li className={styles.film} key={movie.id}>
          <NavLink to={PATHS.popular}>
            <Film
              id={movie.id}
              rating={movie.rating}
              year={movie.year}
              title={movie.title}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              summary={movie.summary}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
