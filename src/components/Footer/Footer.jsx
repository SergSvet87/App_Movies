// import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Icon from './Icon'
import styles from './Footer.module.scss'

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
]

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
                className="social-link"
              >
                <Icon name={icon.name} size={icon.size} />
              </a>
            </li>
          ))}
        </ul>

        {/* <div className="col-xl-2 col-lg-6 col-md-6 col-sm-4">
            <div className="footer__animation animation">
              <a
                href="https://sergsvet87.github.io/My_RESUME/"
                className="animation__link"
                target="_blank"
              >
                <svg
                  className="animation__circle"
                  width="100"
                  height="100"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 54 54"
                  style="enable-background: new 0 0 54 54"
                  xmlSpace="preserve"
                  fill="#d7d7d7"
                >
                  <g>
                    <path
                      id="circleShape"
                      className="circle__shape"
                      d="M27,0C12.112,0,0,12.112,0,27s12.112,27,27,27s27-12.112,27-27S41.888,0,27,0z M27,52C13.215,52,2,40.785,2,27
                S13.215,2,27,2s25,11.215,25,25S40.785,52,27,52z"
                      fill="none"
                    />
                    <path
                      className="animation__arrow"
                      transform="scale(0.6)"
                      d="M32.413,14.293c-0.391-0.391-1.023-0.391-1.414,0L19.501,25.791c-0.667,0.667-0.667,1.751,0,2.418l11.498,11.498
                C31.194,39.902,31.45,40,31.706,40s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L21.12,27l11.293-11.293
                C32.804,15.316,32.804,14.684,32.413,14.293z"
                      fill="#fff"
                    />
                  </g>
                  <text className="animation__text">
                    <textPath href="#circleShape">Сергій Світличний</textPath>
                  </text>
                </svg>
              </a>
            </div>
          </div> */}
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
  )
}
