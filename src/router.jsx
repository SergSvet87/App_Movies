import { createHashRouter } from 'react-router-dom';

import { PATHS } from './const';
import { loaderMovieInfo } from './utils/loaderMovieInfo';
import { Layout } from './layout';

import { ErrorPage } from './pages/error/error-page';
import { NotFoundPage } from './pages/not-found/not-found-page';
import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { TeamPage } from './pages/team/TeamPage';
import { MovieInfoPage } from './pages/movie-info/MovieInfoPage';
import { MoviesByGenrePage } from './pages/movie-genre/MoviesByGenrePage';

export const router = createHashRouter([
  {
    path: PATHS.home,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.about,
        element: <AboutPage />,
      },
      {
        path: PATHS.team,
        element: <TeamPage />,
      },
      {
        path: PATHS.movieId(),
        element: <MovieInfoPage />,
        loader: loaderMovieInfo,
      },
      {
        path: PATHS.genre(),
        element: <MoviesByGenrePage />,

      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
