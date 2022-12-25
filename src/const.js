export const PATHS = {
  home: '/',
  about: '/about',
  team: '/team',
  movie: '/movie',
  genre: (genre) => (genre ? `genre=${genre}` : 'genre=:genre'),
  movieId: (id = null) => (id ? `movieId=${id}` : 'movieId=:movieId'),
};


export const ALL_FILMS_URL = `https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year&page=1`  //main
export const ALL_FILMS_BY_GENRE_URL = `https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year&page=1&genre=fantasy`  //genre
export const POPULAR_FILMS_URL = `https://yts.mx/api/v2/movie_suggestions.json?movie_id=10`  //popular
export const INFO_FILM_URL = 'https://yts.mx/api/v2/movie_details.json?movie_id=1000&with_images=true&with_cast=true'  //info film


// export const BASE_URL = `https://yts.mx/api/v2/list_movies.json`

// ?genre=fantasy&sort_by=year&limit=33&minimum_rating=5.5