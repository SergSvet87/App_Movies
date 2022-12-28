import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import styles from './searchResultPage.module.scss';
import { POPULAR_FILMS_URL } from '../../const';
import {
  useGetMoviesByGenreQuery,
  addPopularMovies,
} from '../../redux/movies/movieSlice';
import { Loader } from '../../components/loader/Loader';
import { Films } from '../../components/main/films/Films';
import { Sidebar } from '../../components/main/sidebar/Sidebar';

export const SearchResultPage = () => {
  const dataFromLoader = useLoaderData();
  const url = new URL(dataFromLoader.url);
  const searchTerm = url.href.split('=')[2];

  const dispatch = useDispatch();

  const params = useParams();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetMoviesByGenreQuery({
    genre: params.genre,
    page: searchTerm,
  });

  const movieLimit = data === undefined ? '' : data.data.limit;
  const movieCount = data === undefined ? '' : data.data.movie_count;
  const movieId = data === undefined ? '' : data.data.movies[0].id;
  const pageQty = Math.ceil(movieCount / movieLimit);

  useEffect(() => {
    if (data !== undefined) {
      axios.get(POPULAR_FILMS_URL + `movie_id=${movieId}`).then(
        ({
          data: {
            data: { movies },
          },
        }) => {
          dispatch(addPopularMovies({ movies }));
        }
      );
    }
  }, [dispatch, movieId, data]);

  return (
    <div className="container">
      <h1>Search Page</h1>
      <div style={{ display: 'flex', paddingTop: '50px' }}>
        {isLoading ? <Loader /> : <Films movies={data.data.movies} />}
        {isLoading ? <Loader /> : <Sidebar />}
      </div>
      <Stack spacing={2}>
        {pageQty && (
          <Pagination
            color="primary"
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            sx={{ marginY: 3, marginX: 'auto' }}
            renderItem={(item) => (
              <PaginationItem
                component={NavLink}
                to={`?page=${item.page}`}
                {...item}
              />
            )}
          />
        )}
      </Stack>
    </div>
  );
  //   }
};
