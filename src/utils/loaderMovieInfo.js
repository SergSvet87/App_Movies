import { INFO_FILM_URL } from "../const"

export const loaderMovieInfo = () => {
  return fetch(INFO_FILM_URL)
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