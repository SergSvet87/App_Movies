import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

export const Navigation = ({ items }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {items.map((item, index) => (
          <li className={styles['nav-item']} key={index}>
            <NavLink className={isActive ? styles.active : ''} to={item}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
