import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../../const';

import styles from './Search.module.scss';

export const Search = () => {
  const [textSearch, setTextSearch] = useState('');
  function onSubmitHandler(e) {
    e.preventDefault();
    setTextSearch(e.target.value);
    e.target.value = '';
  }

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
