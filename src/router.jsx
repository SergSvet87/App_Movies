import { createBrowserRouter } from 'react-router-dom';

import { PATHS } from './utils/urls';
// import { loaderLesson } from './utils/loaderMovie';
import { Layout } from './components/layout';

import { ErrorPage } from './components/pages/error/error-page';
import { NotFoundPage } from './components/pages/not-found/not-found-page';
import HomePage from './components/pages/home/HomePage';

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
        // path: PATHS.lesson(),
        // element: <CategoryPage />,
        // loader: loaderLesson,
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
