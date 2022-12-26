import { useSelector } from 'react-redux';

import { Film } from './Film';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const popularMovieFromStore = useSelector(
    (state) => state.popularMovies.popularMovies
  );

  const films = popularMovieFromStore.filter(
    (film) =>
      film.summary !== '' &&
      film.medium_cover_image !== '404' &&
      film.rating !== 0
  );

  return (
    <ul className={styles.sidebar}>
      {films.map((movie) => (
        <li className={styles.film} key={movie.id}>
          <Film
            id={movie.id}
            rating={movie.rating}
            year={movie.year}
            title={movie.title}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            summary={movie.summary}
          />
        </li>
      ))}
    </ul>
  );
};