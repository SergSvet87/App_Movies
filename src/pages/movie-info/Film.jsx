import React from 'react'
import PropTypes from 'prop-types'

import styles from './MovieInfo.scss'

export const Film = ({ movie }) => {
  return (
    <div className={styles.info} style={{background:movie.background_image_original}}>
      <div className={styles.poster}>
        <img src={movie.poster} alt={movie.title} title={movie.title} />
        <p className={styles.year}>{movie.year}</p>
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{movie.title}</h3>
        <ul className={styles.genres}>
          {movie.genres.map((genre, index) => (
            <li className={styles.genre} key={index}>{genre}</li>
          ))}
        </ul>
        <div className={styles.summary}>{movie.summary}...</div>
      </div>
    </div>
  )
}

Film.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
