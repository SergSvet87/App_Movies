import React, { useState } from 'react';

import styles from './Search.module.scss';

export const Search = () => {
  const [textSearch, setTextSearch] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log('serch_value-->', e.target[0].value);
  }

  return (
    <div className={styles.search}>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <i className="bx bx-search-alt"></i>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="I`m searching for..."
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <i className="bx bx-customize"></i>
    </div>
  );
};
