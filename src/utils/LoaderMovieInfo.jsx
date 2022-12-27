import { useSelector } from 'react-redux';
import { INFO_FILM_URL } from '../const';

export function LoaderMovieInfo({ request }) {
  const url = new URL(request.url);
  // const searchTerm = url.searchParams.get('movie_id');
  const searchTerm = url.pathname;

  // const dataFromStore = useSelector((state) => state.data.data);
  // const movieID = dataFromStore.length === 0 ? '' : dataFromStore.movies[0].id;
  // console.log('movieID', movieID);
  console.log(url.pathname);
  console.log(searchTerm);

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
