import React from 'react';
import { NavLink } from 'react-router-dom';

import { PATHS } from '../../const';
import logo from '../../assets/img/logo.png';
import { Search } from './search/Search';
import { Profile } from './profile/Profile';
import { Navigation } from './navigation/Navigation';

import styles from './Header.module.scss';

export const Header = ({ onSubmitHandler }) => {
  const films = ['home', 'about', 'team'];

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
          <Navigation items={films} />
          <Profile />
        </div>
        <div className={styles.bottom}>
          <Navigation items={genres} />
          <Search onSubmitHandler={onSubmitHandler} />
        </div>
      </div>
    </header>
  );
};
