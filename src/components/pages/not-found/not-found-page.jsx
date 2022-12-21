import React from 'react';
import { NavLink } from 'react-router-dom';

import image from '../../../assets/img/dubl.png';
import { PATHS } from '../../../utils/urls';

export const NotFoundPage = () => {
  return (
    <section id="not-found-page" className="not-found-page">
      <div className="container">
        <div className="not-found-page__img">
          <img src={image} alt="not found page" width={200} height={200} />
        </div>

        <div className="not-found-page__description">
          <h3 className="title-h3">Oops!</h3>
          <h5 className="title-h5">Not Found Page 404</h5>
          <p className="not-found-page__text">
            Sorry, there was a transition to a non-existent address.
          </p>

          <p>
            Please return to the main page via the link!{' '}
            <i
              style={{ display: 'block', fontSize: '38px', color: '#fd920f' }}
              className="bx bxs-down-arrow-alt"
            ></i>
          </p>

          <NavLink className="error-page__link" to={PATHS.home}>
            Home
          </NavLink>
        </div>
      </div>
    </section>
  );
};
