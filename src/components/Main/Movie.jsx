import React from 'react'
import PropTypes from 'prop-types'

const Movie = ({ id, year, rating, title, summary, poster, genres }) => {
  return (
    <>
      <div className="item-movie__poster">
        <p className="item-movie__rating">{rating} / 10</p>
        <img src={poster} alt={title} title={title} />
      </div>
      <div className="item-movie__text">
        <h3 className="item-movie__title">{title}</h3>
        <p className="item-movie__year">{year}</p>
        <ul className="item-movie__genres">
          {genres.map((genre, index) => (
            <li className="item-movie__genre" key={index}>{genre}</li>
          ))}
        </ul>
        <div>{summary}</div>
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
