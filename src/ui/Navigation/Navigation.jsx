import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Navigation.module.scss'

export const Navigation = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav>
      <ul className={styles.nav}>
        <li className={`${isActive ? '' : styles.active}`}>
          <Link to="/series">Series</Link>
        </li>
        <li className={`${isActive ? styles.active : ''}`}>
          <Link to="/">Movie</Link>
        </li>
        <li>
          <Link to="/animation">Animation</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
