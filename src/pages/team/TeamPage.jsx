import React from 'react';

import { TEAM } from '../../const';
import Icon from './Icon';

import styles from './Team.module.scss';

export const TeamPage = () => {
  return (
    <div className="container">
      <section className={styles.team}>
        <h1 className="title-h1">Our Team</h1>
        <p class={styles.text}>
          We are small but effective and friendly team that can implement
          necessary functionality!
        </p>
        <ul class={styles.list}>
          {TEAM.map((person) => (
            <li class={styles.item} key={person.id}>
              <img src={person.image} alt={person.name} />
              {console.log(person.image)}
              <h3 className="title-h3">{person.name}</h3>
              <p>{person.position}</p>
              <p>Links to social networks:</p>
              <ul className={styles.social}>
                {person.icons.map((icon) => (
                  <li className={styles.socialItem} key={icon._id}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={icon.href}
                      className="social-link">
                      <Icon name={icon.name} size={icon.size} />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
