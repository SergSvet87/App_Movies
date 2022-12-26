import { INFO_FILM_URL } from "../const"

export const loaderMovieInfo = ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('movie_id');

  console.log(request.url);
  console.log(searchTerm);

  return fetch(INFO_FILM_URL + `&movie_id=46730`)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }

      throw new Error('Oh, No!!! Something went wrong: 💥')
    })
    .then((data) => data.data.movie)
    .catch((err) => {
      console.log(err);
    })
}