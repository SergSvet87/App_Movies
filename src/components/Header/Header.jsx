import Search from '../../ui/Search/Search'
import Profile from '../../ui/Profile/Profile'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="/">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix"
            height="35"
            width="112"
          />
        </a>
        <Search />
      </div>
      <Profile />
    </header>
  )
}

export default Header
