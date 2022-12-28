import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../../const';
import { useGetMoviesBySearchQuery } from '../../../redux/movies/movieSlice';

import styles from './Search.module.scss';

export const Search = () => {
  const [textSearch, setTextSearch] = useState('');
  const { data, isLoading } = useGetMoviesBySearchQuery(textSearch);
  function onSubmitHandler(e) {
    e.preventDefault();
    setTextSearch(e.target[0].value);
    e.target[0].value = '';
  }
  console.log('data in search', data);

  return (
    <div className={styles.search}>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <i className="bx bx-search-alt"></i>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="I`m searching for..."
          // value={textSearch}
          // onChange={(e) => setTextSearch(e.target.value)}
        />
        <button type="submit">
          <NavLink to={PATHS.search(textSearch)}>Search</NavLink>
        </button>
      </form>
      <i className="bx bx-customize"></i>
    </div>
  );
};
