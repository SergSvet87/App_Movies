import SerhiiPhoto from './assets/img/team/Serhii_Svit.png';

export const PATHS = {
  home: '/',
  about: '/about',
  team: '/team',
  movie: '/movie',
  genre: (genre) => (genre ? `&genre=${genre}` : '&genre=:genre'),
  movieId: (id = null) => (id ? `/&movie_id=${id}` : '/&movie_id=:id'),
  search: (search) => (search ? `&search=${search}` : '&search=:search'),
};

export const BASE_URL = `https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year`;

export const POPULAR_FILMS_URL = `https://yts.mx/api/v2/movie_suggestions.json?`;

export const INFO_FILM_URL =
  'https://yts.mx/api/v2/movie_details.json?with_images=true&with_cast=true&with_images=true&';


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

export const DEFAULT_SLIDES = [
  'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
  'https://images.thedirect.com/media/photos/posd1_1.jpg',
  'https://i.pinimg.com/originals/46/1f/17/461f1790130dd8a619c65cf8ebac949c.jpg',
  'https://www.komar.de/ru/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/v/d/vd-046-star-wars-official-poster-ep7.jpg',
  'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4113_star_wars_movie_poster_rey_ma.jpg',
  'https://cdna.artstation.com/p/assets/images/images/049/362/122/large/ramon-ost-2morbius-projetct-04-original.jpg?1652308209',
  'https://akns-images.eonline.com/eol_images/Entire_Site/2018112/rs_634x939-181202195654-634.captain-marvel.12418.jpg?fit=around%7C634:939&output-quality=90&crop=634:939;center,top',
  'http://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_6203_2_framed2-399939.jpg?v=1611687760',
  'https://i.pinimg.com/736x/30/dc/6c/30dc6cd7a41fd5e25b5ce9415adec6eb.jpg',
];
