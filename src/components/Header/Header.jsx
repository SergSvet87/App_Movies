import logo from '../../assets/img/mainLogo.png'
import { Search } from '../../ui/Search/Search'
import { Profile } from '../../ui/Profile/Profile'
import { Navigation } from '../../ui/Navigation/Navigation'

import styles from './Header.module.scss'

export const Header = ({onSubmitHandler}) => {
  const films = ['Series', 'Movie', 'Animation', 'About']

  const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Short Film',
    'Sport',
    'Superhero',
    'Thriller',
    'War',
    'Western',
    'Film Noir',
    'Game Show',
    'Reality-TV',
    'News',
  ]

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.top}>
          <a href="/">
            <img src={logo} alt="My Logo" height="65" width="180" />
          </a>
          <Navigation items={films} />
          <Profile />
        </div>
        <div className={styles.bottom}>
          <Navigation items={genres} />
          <Search onSubmitHandler={onSubmitHandler}/>
        </div>
      </div>
    </header>
  )
}
