import React from 'react';
import { MemoryRouter, RouterProvider } from 'react-router-dom';

import { router } from './router';
import { Loader } from './components/loader/Loader';

export const App = () => (
  <>
    <RouterProvider base router={router} fallbackElement={<Loader />}></RouterProvider>
    <MemoryRouter basename="/App_Movies"></MemoryRouter>
  </>
);
