import { INFO_FILM_URL } from '../const';

export function loaderMovieInfo({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.pathname;

  return fetch(INFO_FILM_URL + searchTerm)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Oh, No!!! Something went wrong: 💥');
    })
    .then((data) => data.data.movie)
    .catch((err) => {
      console.log(err);
    });
}
