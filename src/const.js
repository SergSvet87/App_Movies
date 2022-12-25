export const PATHS = {
  home: '/',
  about: '/about',
  team: '/team',
  movie: '/movie',
  genre: (genre) => (genre ? `genre=${genre}` : 'genre=:genre'),
  movieId: (id = null) => (id ? `movieId=${id}` : 'movieId=:movieId'),
};


export const BASE_URL = `https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year&`  //main

export const PAGE_URL = `https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year&page=1`  //pages

export const GENRE_URL = `https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year&page=1&genre=fantasy`  //genre

export const POPULAR_FILMS_URL = `https://yts.mx/api/v2/movie_suggestions.json?movie_id=10`  //popular

export const INFO_FILM_URL = 'https://yts.mx/api/v2/movie_details.json?movie_id=1000&with_images=true&with_cast=true'  //info film

// ?genre=fantasy&sort_by=year&limit=33&minimum_rating=5.5


export const PAGES = ['home', 'about', 'team'];

export const GENRES = [
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
];

export const TEAM = [
  {
    id: 1,
    name: 'Serhii Svitlychnyi',
    image: "../../assets/img/team/Serhii_Svit.png",
    position: 'Designer & Front-End Developer',
    icons: [
      {
        _id: 1,
        name: 'linkedin',
        href: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BhcBiHBFlT5yVayJn2EHCdQ%3D%3D',
        size: 25,
      },
      {
        _id: 2,
        name: 'telegram',
        href: 'https://t.me/Serg_svet',
        size: 28,
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
        size: 25,
      },
      {
        _id: 5,
        name: 'viber',
        href: 'viber://chat?number=%2B380976157541',
        size: 28,
      },
    ]
  },
  {
    id: 2,
    name: 'Ruslan Vasylyshyn',
    image: '../../assets/img/team/Serhii_Svit.png',
    position: 'Designer & Front-End Developer',
    icons: [
      {
        _id: 1,
        name: 'linkedin',
        href: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BhcBiHBFlT5yVayJn2EHCdQ%3D%3D',
        size: 25,
      },
      {
        _id: 2,
        name: 'telegram',
        href: 'https://t.me/Serg_svet',
        size: 28,
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
        size: 25,
      },
      {
        _id: 5,
        name: 'viber',
        href: 'viber://chat?number=%2B380976157541',
        size: 28,
      },
    ]
  },
  {
    id: 3,
    name: 'Mykola S',
    image: '../../assets/img/team/Serhii_Svit.png',
    position: 'Designer & Front-End Developer',
    icons: [
      {
        _id: 1,
        name: 'linkedin',
        href: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BhcBiHBFlT5yVayJn2EHCdQ%3D%3D',
        size: 25,
      },
      {
        _id: 2,
        name: 'telegram',
        href: 'https://t.me/Serg_svet',
        size: 28,
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
        size: 25,
      },
      {
        _id: 5,
        name: 'viber',
        href: 'viber://chat?number=%2B380976157541',
        size: 28,
      },
    ]
  }
];