import React from 'react';
import { NavLink } from 'react-router-dom';

import image from '../../../assets/img/dubl.png';
import { PATHS } from '../../../utils/urls';

import styles from './not-found.module.scss';

export const NotFoundPage = () => {
  return (
    <section id="not-found-page" className={styles.notFound}>
      <div className="container">
        <div className={styles.image}>
          <img src={image} alt="not found page" width={600} height={600} />

          <h5 className={styles.title}>404</h5>
        </div>

        <div className={styles.text}>
          <h3>Oops!</h3>
          <p>Sorry, there was a transition to a non-existent address.</p>

          <p>
            Please return to the main page via the <NavLink className={styles.link} to={PATHS.home}>
            Home
          </NavLink>!{' '}
          </p>

          
        </div>
      </div>
    </section>
  );
};
