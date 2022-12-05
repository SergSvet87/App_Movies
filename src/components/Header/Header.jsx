import logo from '../../assets/img/mainLogo.png'
import { Search } from '../../ui/Search/Search'
import { Profile } from '../../ui/Profile/Profile'
import { Navigation } from '../../ui/Navigation/Navigation'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="/">
          <img src={logo} alt="My Logo" height="65" width="180" />
        </a>
        <Navigation />
        <Search />
        <Profile />
      </div>
    </header>
  )
}
