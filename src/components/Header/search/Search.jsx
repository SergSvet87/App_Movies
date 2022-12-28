import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../../const';
import { useGetMoviesBySearchQuery } from '../../../redux/movies/movieSlice';

import styles from './Search.module.scss';

export const Search = () => {
  const [textSearch, setTextSearch] = useState('');
  // const { data, isLoading } = useGetMoviesBySearchQuery(textSearch);
  function onSubmitHandler(e) {
    e.preventDefault();
    // e.stopPropagation();
    setTextSearch(e.target.value);
    e.target.value = '';
  }
  // console.log('data in search', data);

  return (
    <div className={styles.search}>
      <form>
        <i className="bx bx-search-alt"></i>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="I`m searching for..."
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
          onBlur={(e) => onSubmitHandler(e)}
        />
        <NavLink to={PATHS.search(textSearch)}>
          <button type="button">Search</button>
        </NavLink>
      </form>
      <i className="bx bx-customize"></i>
    </div>
  );
};
