import React from 'react';

import logo from '../../assets/img/mainLogo.png';
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
          <a href="/">
            <img src={logo} alt="My Logo" height="65" width="180" />
          </a>
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
