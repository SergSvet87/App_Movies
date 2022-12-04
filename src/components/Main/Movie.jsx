import React from 'react'
import PropTypes from 'prop-types'

import styles from './Movies.module.scss'

const Movie = ({ id, year, rating, title, summary, poster, genres }) => {
  return (
    <>
      <div className={styles.poster}>
        <p className={styles.rating}>{rating} / 10</p>
        <img src={poster} alt={title} title={title} />
        <p className={styles.year}>{year}</p>
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.genres}>
          {genres.map((genre, index) => (
            <li className={styles.genre} key={index}>{genre}</li>
          ))}
        </ul>
        <div className={styles.summary}>{summary.slice(0, 200)}...</div>
      </div>
    </>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
