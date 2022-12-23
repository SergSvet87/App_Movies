export const PATHS = {
  home: '/',
  about: '/about',
  teams: '/teams',
  // category: (category) => (category ? `category/{category}` : 'lesson/:category'),
  // movieId: (movieId = null) => (movieId ? `movieId/{movieId}` : 'movieId/:movieId'),
};


export const ALL_FILMS_URL = `https://yts.mx/api/v2/list_movies.json?page=1&limit=30&sort_by=year`
export const POPULAR_FILMS_URL = `https://yts.mx/api/v2/movie_suggestions.json?movie_id=10`
export const BASE_URL = `https://yts.mx/api/v2/list_movies.json`

// ?genre=fantasy&sort_by=year&limit=33&minimum_rating=5.5