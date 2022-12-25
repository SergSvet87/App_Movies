import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { Loader } from './components/loader/Loader';

export const App = () => (
  <>
    <RouterProvider router={router} fallbackElement={<Loader />}></RouterProvider>
  </>
);
