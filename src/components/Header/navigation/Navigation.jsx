import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PATHS } from '../../../const';
import styles from './Navigation.module.scss';

export const Navigation = ({ items }) => {
  const [isActive, setIsActive] = useState(false);
  // setIsActive(!isActive)
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {items.map((item, index) => (
          <li className={styles['nav-item']} key={index}>
            {item === 'home' ? (
              <NavLink className={isActive} to={PATHS.home}>
                {item}
              </NavLink>
            ) : (
              <NavLink className={isActive ? styles.active : ''} to={item}>
                {item}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
