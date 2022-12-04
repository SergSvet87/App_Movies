import logo from '../../assets/img/mainLogo.png'
import Search from '../../ui/Search/Search'
import Profile from '../../ui/Profile/Profile'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="/">
          <img
            src={logo}
            alt="Kino"
            height="65"
            width="180"
          />
        </a>
        <Search />
      </div>
      <Profile />
    </header>
  )
}

export default Header
