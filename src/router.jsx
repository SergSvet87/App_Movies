import { createBrowserRouter } from 'react-router-dom';

import { PATHS } from './const';
// import { loaderLesson } from './utils/loaderMovie';
import { Layout } from './layout';

import { ErrorPage } from './pages/error/error-page';
import { NotFoundPage } from './pages/not-found/not-found-page';
import HomePage from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { TeamsPage } from './pages/teams/TeamsPage';

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
        // path: PATHS.lesson(),
        // element: <MovieInfoPage />,
        // loader: loaderLesson,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
