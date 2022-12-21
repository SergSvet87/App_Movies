import React from 'react';

// import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Icon from './Icon';
import styles from './Footer.module.scss';

const icons = [
  {
    _id: 1,
    name: 'linkedin',
    href: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BhcBiHBFlT5yVayJn2EHCdQ%3D%3D',
    size: 30,
  },
  {
    _id: 2,
    name: 'telegram',
    href: 'https://t.me/Serg_svet',
    size: 30,
  },
  {
    _id: 3,
    name: 'gmail',
    href: 'mailto:svitlychnyi1905@gmail.com',
    size: 30,
  },
  {
    _id: 4,
    name: 'github',
    href: 'https://github.com/SergSvet87',
    size: 30,
  },
  {
    _id: 5,
    name: 'viber',
    href: 'viber://chat?number=%2B380976157541',
    size: 30,
  },
  {
    _id: 6,
    name: 'whatsapp',
    href: 'https://api.whatsapp.com/send?phone=+380976157541',
    size: 30,
  },
  {
    _id: 7,
    name: 'stackoverflow',
    href: 'https://stackoverflow.com/users/20042762/serhii-svitlychnyi',
    size: 30,
  },
  {
    _id: 8,
    name: 'facebook',
    href: 'https://www.facebook.com/s.svetlichnyy/',
    size: 32,
  },
  {
    _id: 9,
    name: 'skype',
    href: 'Skype:https://join.skype.com/invite/CBnR8fF6vKfj',
    size: 30,
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <ul className={styles.social}>
          {icons.map((icon) => (
            <li className={styles.socialItem} key={icon._id}>
              <a
                // target="_blank"
                href={icon.href}
                className="social-link">
                <Icon name={icon.name} size={icon.size} />
              </a>
            </li>
          ))}
        </ul>
        
        <div className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} All rights reserved | This
          template is made with <i className="bx bxs-heart"></i> in
          <address className="footer__address">
            <a
              href="https://sergsvet87.github.io/My_Portfolio/"
              // target="_blank"
            >
              Ukraine, Kharkiv
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
};
