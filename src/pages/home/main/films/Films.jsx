import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllMovies } from '../../../../redux/movies/movieSlice';
import { getPopularMovies } from '../../../../redux/movies/popularMovieSlice';

import { Film } from './Film';

import styles from './Films.module.scss';

export const Films = () => {
  const moviesFromRedux = useSelector(getAllMovies);
  console.log('moviesFromRedux', moviesFromRedux);

  const navigate = useNavigate();

  const films = moviesFromRedux.movies.filter(
    (film) =>
      film.summary !== '' &&
      film.medium_cover_image !== '404' &&
      film.rating !== 0
  );

  return (
    <>
      <ul className={styles.films}>
        {films.map((movie) => (
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
    </>
  );
};
