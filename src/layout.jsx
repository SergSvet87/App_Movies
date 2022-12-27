import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Loader } from './components/loader/Loader';

export const Layout = () => {
  const { state } = useNavigation();

  return (
    <div className="wrapper">
      <Header />
      {state === 'loading' ? <Loader /> : null}
      <main className="page">
        <ScrollRestoration />
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};
