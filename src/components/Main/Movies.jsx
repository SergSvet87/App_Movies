import React from 'react'

import Movie from './Movie'

export const Movies = ({ movies }) => {
  return (
    <main>
      <ul className="movies">
        {movies.map((movie) => (
          <li className="movies__item item-movie" key={movie.id}>
            <Movie
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
    </main>
  )
}
