import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Navigation.module.scss'

export const Navigation = ({ items }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {items.map((item, index) => (
          <li className={styles['nav-item']} key={index}>
            <Link className={isActive ? styles.active : ''} to={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
