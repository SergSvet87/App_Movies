export const PATHS = {
  home: '/',
  about: '/about',
  teams: '/teams',
  // category: (category) => (category ? `category/{category}` : 'lesson/:category'),
  // movieId: (movieId = null) => (movieId ? `movieId/{movieId}` : 'movieId/:movieId'),
};


export const ALL_FILMS_URL = `https://yts.mx/api/v2/list_movies.json?limit=40&sort_by=year`

// ?genre=fantasy&sort_by=year&limit=33&minimum_rating=5.5