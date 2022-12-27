import SerhiiPhoto from './assets/img/team/Serhii_Svit.png';

export const PATHS = {
  home: '/',
  about: '/about',
  team: '/team',
  movie: '/movie',
  page: (page) => (page ? `&page=${page}` : '&page=:page'),
  genre: (genre) => (genre ? `&genre=${genre}` : '&genre=:genre'),
  movieId: (id = null) => (id ? `&movie_id=${id}` : '&movie_id=:id'),
};

export const BASE_URL = `https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year`; //main

export const PAGE_URL = `https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year&page=1`; //pages

export const GENRE_URL = `https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year&page=1&genre=fantasy`; //genre

export const POPULAR_FILMS_URL = `https://yts.mx/api/v2/movie_suggestions.json?`; //popular

export const INFO_FILM_URL =
  'https://yts.mx/api/v2/movie_details.json?with_images=true&with_cast=true'; //info film

// ?genre=fantasy&sort_by=year&limit=33&minimum_rating=5.5

export const PAGES = ['home', 'about', 'team'];

export const GENRES = [
  'action',
  'adventure',
  'animation',
  'biography',
  'comedy',
  'crime',
  'documentary',
  'drama',
  'family',
  'fantasy',
  'history',
  'horror',
  'music',
  'musical',
  'mystery',
  'romance',
  'sci-Fi',
  'short Film',
  'sport',
  'superhero',
  'thriller',
  'war',
  'western',
  'film Noir',
  'game Show',
  'reality-TV',
  'news',
];

export const TEAM = [
  {
    id: 1,
    name: 'Serhii Svitlychnyi',
    image: SerhiiPhoto,
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
    ],
  },
  {
    id: 2,
    name: 'Ruslan Vasylyshyn',
    image: SerhiiPhoto,
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
    ],
  },
  {
    id: 3,
    name: 'Mykola S',
    image: SerhiiPhoto,
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
    ],
  },
];
