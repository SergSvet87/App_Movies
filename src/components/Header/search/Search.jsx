import React from 'react'

import styles from './Search.module.scss'

export const Search = ({onSubmitHandler}) => {
  const [textSearch, setTextSearch] = React.useState('')

  return (
    <div className={styles.search}>
      <form onSubmit={e => onSubmitHandler(e)}>
        <i className="bx bx-search-alt"></i>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="I`m searching for..."
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
      </form>
      <i className="bx bx-customize"></i>
    </div>
  )
}
