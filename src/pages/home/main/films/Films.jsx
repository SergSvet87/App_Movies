import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../../../components/redux/movies/movieSlice';

import { Film } from './Film';

import styles from './Films.module.scss';

export const Films = ({ movies }) => {
  const moviesFromRedux = useSelector(getAllMovies);

  // console.log('moviesFromRedux', moviesFromRedux);

  const films = moviesFromRedux.filter(
    (film) => film.summary !== '' && film.medium_cover_image !== '404'
  );

  return (
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
  );
};
