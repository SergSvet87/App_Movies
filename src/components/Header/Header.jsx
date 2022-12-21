import React from 'react';
import { NavLink } from 'react-router-dom';

import { PATHS } from '../../utils/urls';
import logo from '../../assets/img/logo.png';
import { Search } from '../ui/search/Search';
import { Profile } from '../ui/profile/Profile';
import { Navigation } from '../ui/navigation/Navigation';

import styles from './Header.module.scss';

export const Header = ({ onSubmitHandler }) => {
  const films = ['Home', 'About', 'Teams'];

  const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Short Film',
    'Sport',
    'Superhero',
    'Thriller',
    'War',
    'Western',
    'Film Noir',
    'Game Show',
    'Reality-TV',
    'News',
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.top}>
          <NavLink className={styles.logo} to={PATHS.home}>
            <img src={logo} alt="My Logo" width={50} height={40} />
            <span>M</span>OVIE<span>S</span>
          </NavLink>
          <Navigation className={styles.navTop} items={films} />
          <Profile />
        </div>
        <div className={styles.bottom}>
          <Navigation className={styles.navBottom} items={genres} />
          <Search onSubmitHandler={onSubmitHandler} />
        </div>
      </div>
    </header>
  );
};
