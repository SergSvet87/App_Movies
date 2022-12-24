import { createBrowserRouter } from 'react-router-dom';

import { PATHS } from './const';
// import { loaderLesson } from './utils/loaderMovie';
import { Layout } from './layout';

import { ErrorPage } from './pages/error/error-page';
import { NotFoundPage } from './pages/not-found/not-found-page';
import HomePage from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { TeamsPage } from './pages/teams/TeamsPage';
import { MovieInfoPage } from './pages/movie-info/MovieInfoPage';

export const router = createBrowserRouter([
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
        path: PATHS.teams,
        element: <TeamsPage />,
      },
      {
        path: PATHS.movie,
        element: <MovieInfoPage />,
        // loader: loaderMovieInfo,
      },
      {
        // path: PATHS.genre(),
        // element: <MoviesByGenrePage />,
        // loader: loaderMovieByGenre,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
