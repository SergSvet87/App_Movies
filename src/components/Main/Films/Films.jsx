import React from 'react';

import { Film } from '../../Main/Films/Film';

import styles from './Films.module.scss';

export const Films = ({ movies }) => {
  return (
    <div className="container">
      <ul className={styles.films}>
        {movies.map((movie) => (
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
    </div>
  );
};
