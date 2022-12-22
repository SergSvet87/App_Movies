import { Outlet, useNavigation } from 'react-router-dom';

import { Footer } from './Footer/Footer';
import { Loader } from './ui/loader/Loader';
import { Header } from './Header/Header';

export const Layout = () => {
  const { state } = useNavigation();

  return (
    <div className="wrapper">
      <Header />
      {state === 'loading' ? <Loader /> : null}
      <main className="page">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};
