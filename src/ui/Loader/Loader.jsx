import React from 'react'

import styles from './Loader.module.scss'

export const Loader = () => {
  return (
    <div id="preloader" className={styles.preloader}>
      <h2>Loading...</h2>
      <div className={styles.loader}></div>
    </div>
  )
}
