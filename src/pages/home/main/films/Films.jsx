import { useSelector } from 'react-redux';

import { Film } from './Film';

import styles from './Films.module.scss';

export const Films = () => {
  const movieFromStore = useSelector((state) => state.movies.movies);

  const films = movieFromStore.filter(
    (film) =>
      film.summary !== '' &&
      film.medium_cover_image !== '404' &&
      film.rating !== 0
  );
  return (
    <section className={styles.films}>
      <h2 className="title-h2">Your favorite movies:</h2>
      <ul className={styles.list}>
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
    </section>
  );
};
