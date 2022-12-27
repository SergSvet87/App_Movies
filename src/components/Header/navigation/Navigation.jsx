import React from 'react';
import { NavLink } from 'react-router-dom';

import { PATHS } from '../../../const';
import styles from './Navigation.module.scss';

export const Navigation = ({ items }) => {
  
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {items.map((item, index) => (
          <li className={styles['nav-item']} key={index}>
            {item === 'home' ? (
              <NavLink className={({isActive}) => isActive ? styles.active : null } to={PATHS.home}>
                {item}
              </NavLink>
            ) : (
              <NavLink className={({isActive}) => isActive ? styles.active : null } to={item}>
                {item}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
