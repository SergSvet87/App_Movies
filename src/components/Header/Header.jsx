import React from 'react';
import { NavLink } from 'react-router-dom';

import { PAGES } from '../../const';
import { GENRES } from '../../const';
import { PATHS } from '../../const';
import logo from '../../assets/img/logo.png';
import { Search } from './search/Search';
import { Profile } from './profile/Profile';
import { Navigation } from '../navbar/Navigation';

import styles from './Header.module.scss';

export const Header = ({ onSubmitHandler }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.top}>
          <NavLink className={styles.logo} to={PATHS.home}>
            <img src={logo} alt="My Logo" width={50} height={40} />
            <span>M</span>OVIE<span>S</span>
          </NavLink>
          <Navigation items={PAGES} />
          <Profile />
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomGenres}><Navigation items={GENRES} /></div>
          <Search onSubmitHandler={onSubmitHandler} />
        </div>
      </div>
    </header>
  );
};
